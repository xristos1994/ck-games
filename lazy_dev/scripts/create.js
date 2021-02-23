const fs = require("fs");
const util = require("util");

// helper functions
const getFileNamesInDirectory = directory => {
  const dir = directory.trim();

  if (!dir) {
    return [];
  }

  const fileNames = [];

  fs.readdirSync(dir).forEach(file => {
    fileNames.push(file);
  });

  return fileNames;
};

// --
const readFile = async path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function (err, data) {
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
const getFilePathsOfAllFilesInDirectory = rootDir => {
  if (rootDir.slice(-1) !== "/") {
    rootDir = rootDir + "/";
  }
  let paths = [];
  getFileNamesInDirectory(rootDir).forEach(f => {
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
  if (rootDir.slice(-1) === "/") {
    rootDir = rootDir.slice(0, -1);
  }

  getFileNamesInDirectory(rootDir).forEach(f => {
    let newName = f;
    for (let variable in variables) {
      const forReplace = "[%" + variable + "%]";
      newName = replaceAll(newName, forReplace, variables[variable]);
    }
    fs.renameSync(rootDir + "/" + f, rootDir + "/" + newName);
  });
  getFileNamesInDirectory(rootDir)
    .filter(f => fs.lstatSync(rootDir + "/" + f).isDirectory())
    .forEach(d => renameEverythingInDirectory(rootDir + "/" + d, variables));
};

//---------------------------------------------------------
const prompts = require("prompts");
const fse = require("fs-extra");

(async () => {
  const templatesFolderPath = "./lazy_dev/templates/";

  const templates = getFileNamesInDirectory(templatesFolderPath).filter(f =>
    fs.lstatSync(templatesFolderPath + f).isDirectory()
  );

  if (templates.length === 0) {
    console.log("There are no available templates.");
    return;
  }

  const { template } = await prompts([
    {
      type: "select",
      name: "template",
      message: "Select one of the available templates:",
      choices: templates.map(t => ({ title: t, value: t })),
    },
  ]);

  const _rootDirName = await prompts({
    type: "text",
    name: "value",
    message: "What is the name of root Directory of?",
    validate: value => (value.trim().length === 0 ? `Must not be empty` : true),
  });

  const rootDirName = _rootDirName.value;

  const templateRootPathNew = "./lazy_dev/" + rootDirName + "/";
  await fse.remove(templateRootPathNew);
  await fse.copy("./lazy_dev/templates/" + template + "/", templateRootPathNew);

  const filePathsInTemplate = getFilePathsOfAllFilesInDirectory(
    templateRootPathNew
  );
  const variables = {};
  for (let filePath of filePathsInTemplate) {
    const data = await readFile(filePath);
    filePath
      .concat(data)
      .split("%]")
      .map(d => d.split("[%")[1])
      .forEach(v => {
        if (v) {
          variables[v] = "";
        }
      });
  }

  for (let key of Object.keys(variables)) {
    const response = await prompts({
      type: "text",
      name: "value",
      message: "What is the value of '" + key + "'?",
      validate: value =>
        value.trim().length === 0 ? `Must not be empty` : true,
    });
    variables[key] = response.value;
  }

  const finalTemplateFilePaths = filePathsInTemplate.map(p => {
    let finalPath = p;
    for (let variable in variables) {
      const forReplace = "[%" + variable + "%]";
      finalPath = replaceAll(finalPath, forReplace, variables[variable]);
    }
    return finalPath;
  });

  for (let i = 0; i < filePathsInTemplate.length; i++) {
    const file = filePathsInTemplate[i];
    const finalFileName = finalTemplateFilePaths[i];

    let finalFileContent = await readFile(file);

    for (let variable in variables) {
      const forReplace = "[%" + variable + "%]";
      finalFileContent = replaceAll(
        finalFileContent,
        forReplace,
        variables[variable]
      );
    }
    await writeFile(file, finalFileContent);
  }
  renameEverythingInDirectory(templateRootPathNew, variables);
  await fse.move(templateRootPathNew, "./src/models/" + rootDirName);
})();
