var ext = require('pom-parser'); 
var pom = ext.parse({ filePath: "././pom.xml"});                
console.log("XML: " + pom.pomXml);
console.log("OBJECT: " + JSON.stringify(pomResponse.pomObject));
console.log(project.version);

