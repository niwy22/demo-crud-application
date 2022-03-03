const fs = require("fs");
const yaml = require("js-yaml");
const doc = yaml.load(fs.readFileSync("./main/swagger.yaml", "utf8"));
console.log(doc.info.version)
