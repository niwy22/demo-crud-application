var ext = require('pom-parser'); 
var pom = pomParser.parse({ filePath: "././pom.xml"});
var version = pom.version;
console.log(version)
