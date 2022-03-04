var ext = require('pom-parser'); 
var pom = ext.parse({ filePath: "././pom.xml"});
pomParser.parse(opts, function(pomResponse) 
                
console.log("XML: " + pomResponse.pomXml);
console.log("OBJECT: " + JSON.stringify(pomResponse.pomObject));
console.log(project.version);

