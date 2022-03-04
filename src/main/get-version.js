var pomParser = require("pom-parser");
var opts = {
  filePath:  __dirname + "././pom.xml", // The path to a pom file
};
pomParser.parse(opts, function(err, pomResponse) {
  if (err) {
    console.log("ERROR: " + err);
    process.exit(1);
  }

  // The original pom xml that was loaded is provided.
  console.log("XML: " + pomResponse.pomXml);
  // The parsed pom pbject.
  console.log("OBJECT: " + JSON.stringify(pomResponse.pomObject));
  console.log(project.version);
});
