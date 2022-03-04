var ext = require('pom-parser'); 
var pom = ext.parse({ filePath: "././pom.xml"});
var version = pom.version;
console.log(version)
module.exports = function(grunt)
