const fs = require("fs");
const yaml = require("js-yaml");
const doc = yaml.load(fs.readFileSync("https://github.com/niwy22/demo-crud-application.git/test.yaml", "utf8"));
console.log(doc.project.version)
