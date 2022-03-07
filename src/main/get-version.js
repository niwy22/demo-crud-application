var pomParser = require("pom-parser");
const fs = require("fs");
const yaml = require("js-yaml");
var opts = {
  filePath: "C:/Users/niweditar/Videos/demo-crud-application/pom.xml", // The path to a pom file
};
// Parse the pom based on a path
pomParser.parse(opts, function(err, pomResponse) {
  if (err) {
    console.log("ERROR: " + err);
    process.exit(1);
  }
  var xml=pomResponse.pomXml;
  //console.log(xml.project)
  //console.log("XML: " + pomResponse.pomXml);
  // The parsed pom pbject.
  var json=JSON.stringify(pomResponse.pomObject);
  var store=json
  console.log(store.project)
  
});
