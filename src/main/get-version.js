var pomParser = require("pom-parser");
var opts = {
  filePath:  "././pom.xml", // The path to a pom file
};
pomParser.parse(opts, function(pomResponse) {

  // The original pom xml that was loaded is provided.
  console.log("XML: " + pomResponse.pomXml);
  // The parsed pom pbject.
  console.log("OBJECT: " + JSON.stringify(pomResponse.pomObject));
  console.log(project.version);
});
