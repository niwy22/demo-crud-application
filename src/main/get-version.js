var ext = require('pom-parser'); 
var pom = ext.parse({ filePath: "././pom.xml"});
var version = pom.project.version;
console.log(version)
