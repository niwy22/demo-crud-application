const fs = require("fs");
const yaml = require("js-yaml");
//const doc = yaml.load(fs.readFileSync("././pom.xml", "utf8"));
const doc = ext.parsePom({ filePath: ././pom.xml"});
var version= doc.version;
console.log(version)
//console.log(root.project.version)
