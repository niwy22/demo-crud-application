var ext = require('pom-parser'); 
var pom = ext.parsePom({ filePath: "pom.xml"});
var version = pom.version;
console.log(version)
