var ext = require('pom-parser'); 
var pom = ext.parse({ filePath: "././pom.xml"});
var version;
var vers = pom.version;
console.log(vers)
