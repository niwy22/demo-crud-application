var ext = require("pom-parser");
var pom = ext.parse({ filePath: "././pom.xml"});
console.log(pom.app.version);

