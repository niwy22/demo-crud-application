const fs = require("fs");
const yaml = require("js-yaml");
const doc = yaml.load(fs.readFileSync("./src/main/test.yaml", "utf8"));
console.log(doc.project.version)
