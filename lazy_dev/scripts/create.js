const fs = require('fs');

// helper functions
const getFileNamesInDirectory = (directory) => {
  const dir = directory.trim();

  if (!dir) {
    return [];
  }

  const fileNames = [];

  fs.readdirSync(dir).forEach((file) => {
    fileNames.push(file);
  });

  return fileNames;
};

// --
const readFile = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// --
const writeFile = async (path, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, function (err) {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

// --
const getFilePathsOfAllFilesInDirectory = (rootDir) => {
  if (rootDir.slice(-1) !== '/') {
    rootDir = rootDir + '/';
  }
  let paths = [];
  getFileNamesInDirectory(rootDir).forEach((f) => {
    if (fs.lstatSync(rootDir + f).isFile()) {
      paths.push(rootDir + f);
    } else if (fs.lstatSync(rootDir + f).isDirectory()) {
      paths = paths.concat(getFilePathsOfAllFilesInDirectory(rootDir + f));
    }
  });
  return paths;
};

// --
const replaceAll = (initialString, oldString, newString) => {
  let finalString = initialString;
  while (finalString.indexOf(oldString) !== -1) {
    finalString = finalString.replace(oldString, newString);
  }
  return finalString;
};

// --
const renameEverythingInDirectory = (rootDir, variables) => {
  if (rootDir.slice(-1) === '/') {
    rootDir = rootDir.slice(0, -1);
  }

  getFileNamesInDirectory(rootDir).forEach((f) => {
    let newName = f;
    for (let variable in variables) {
      const forReplace = '[%' + variable + '%]';
      newName = replaceAll(newName, forReplace, variables[variable]);
    }
    fs.renameSync(rootDir + '/' + f, rootDir + '/' + newName);
  });
  getFileNamesInDirectory(rootDir)
    .filter((f) => fs.lstatSync(rootDir + '/' + f).isDirectory())
    .forEach((d) => renameEverythingInDirectory(rootDir + '/' + d, variables));
};

//---------------------------------------------------------
const prompts = require('prompts');
const fse = require('fs-extra');

(async () => {
  fse.emptyDirSync('./lazy_dev/__output__');

  const templatesFolderPath = './lazy_dev/templates/';

  const templates = getFileNamesInDirectory(templatesFolderPath).filter((f) =>
    fs.lstatSync(templatesFolderPath + f).isDirectory()
  );

  if (templates.length === 0) {
    console.log('There are no available templates.');
    return;
  }

  const { template } = await prompts([
    {
      type: 'select',
      name: 'template',
      message: 'Select one of the available templates:',
      choices: templates.map((t) => ({ title: t, value: t }))
    }
  ]);

  const _rootDirName = await prompts({
    type: 'text',
    name: 'value',
    message: 'What is the name of root Directory of?',
    validate: (value) => (value.trim().length === 0 ? `Must not be empty` : true)
  });

  const rootDirName = _rootDirName.value;

  const templateRootPathNew = './lazy_dev/__output__' + rootDirName + '/';
  await fse.remove(templateRootPathNew);
  await fse.copy('./lazy_dev/templates/' + template + '/', templateRootPathNew);

  const filePathsInTemplate = getFilePathsOfAllFilesInDirectory(templateRootPathNew);
  const variables = {};
  for (let filePath of filePathsInTemplate) {
    const data = await readFile(filePath);
    filePath
      .concat(data)
      .split('%]')
      .map((d) => d.split('[%')[1])
      .forEach((v) => {
        if (v) {
          variables[v] = '';
        }
      });
  }

  for (let key of Object.keys(variables)) {
    const response = await prompts({
      type: 'text',
      name: 'value',
      message: "What is the value of '" + key + "'?",
      validate: (value) => (value.trim().length === 0 ? `Must not be empty` : true)
    });
    variables[key] = response.value;
  }

  for (let i = 0; i < filePathsInTemplate.length; i++) {
    const file = filePathsInTemplate[i];

    let finalFileContent = await readFile(file);

    for (let variable in variables) {
      const forReplace = '[%' + variable + '%]';
      finalFileContent = replaceAll(finalFileContent, forReplace, variables[variable]);
    }
    await writeFile(file, finalFileContent);
  }
  renameEverythingInDirectory(templateRootPathNew, variables);

  let destinationPath = false;
  do {
    const response = await prompts({
      type: 'text',
      name: 'value',
      message: 'Write the path of the new directory. (.src/ is considered as root)?'
    });
    destinationPath = response.value;
    while (true) {
      if (destinationPath[0] === '/') {
        destinationPath = destinationPath.substring(1);
      } else if (destinationPath.slice(-1) === '/') {
        destinationPath = destinationPath.slice(0, -1);
      } else {
        break;
      }
    }
  } while (destinationPath === false);

  await fse.move(templateRootPathNew, './src/' + destinationPath + '/' + rootDirName);
  fse.emptyDirSync('./lazy_dev/__output__');
})();
