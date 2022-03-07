const fs = require("fs");
const yaml = require("js-yaml");
const doc = yaml.load(fs.readFileSync("./test.yaml", "utf8"));
console.log(doc.project.version)
