const fs = require("fs");
const yaml = require("js-yaml");
const doc = yaml.load(fs.readFileSync("./https://github.com/niwy22/demo-crud-application.git/src/main/demo-crud-project.json", "utf8"));
console.log(doc.info.version)
