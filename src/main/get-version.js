const fs = require("fs");
const yaml = require("js-yaml");
const doc = yaml.load(fs.readFileSync("././pom.xml", "utf8"));
console.log(getversion())
