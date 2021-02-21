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

  const filesInTemplate = getFileNamesInDirectory(templateRootPathNew);

  let variables = {};
  let variableValues = {};

  if (filesInTemplate.find(f => f === "__variables__.json")) {
    const vars = await readFile(templateRootPathNew + "__variables__.json");
    variables = JSON.parse(vars);
  }

  const variablesKeys = Object.keys(variables);

  for (let i = 0; i < variablesKeys.length; i++) {
    const v = variablesKeys[i];

    const response = await prompts({
      type: "text",
      name: "value",
      message: "What is the value of " + v + "?",
      validate: value =>
        value.trim().length === 0 ? `Must not be empty` : true,
    });
    variableValues[v] = response.value;
  }

  const finalFiles = filesInTemplate.filter(
    f =>
      f !== "__variables__.json" &&
      fs.lstatSync(templateRootPathNew + f).isFile()
  );

  for (let i = 0; i < finalFiles.length; i++) {
    const f = finalFiles[i];

    let finalFileName = f;
    let finalFileContent = await readFile(templateRootPathNew + f);

    for (let variable in variables) {
      const forReplace = "[%" + variable + "%]";
      if (variables[variable].includes(f)) {
        while (finalFileName.indexOf(forReplace) !== -1) {
          finalFileName = finalFileName.replace(
            forReplace,
            variableValues[variable]
          );
        }
        while (finalFileContent.indexOf(forReplace) !== -1) {
          finalFileContent = finalFileContent.replace(
            forReplace,
            variableValues[variable]
          );
        }
      }
    }

    await writeFile(templateRootPathNew + finalFileName, finalFileContent);
  }

  await fse.remove(templateRootPathNew + "__variables__.json");

  await fse.move(templateRootPathNew, "./src/models/" + rootDirName);
})();
