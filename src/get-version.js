const fs = require("fs");
const yaml = require("js-yaml");
const doc = yaml.load(fs.readFileSync("./main/demo-crud-project.json", "utf8"));
console.log(doc.info.version)
