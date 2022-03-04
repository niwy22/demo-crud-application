var pomParser = require("pom-parser");
var opts = {
  filePath: "././pom.xml", 
};

pomParser.parse(opts, function(err, pomResponse) {
  if (err) {
    console.log("ERROR: " + err);
    process.exit(1);
  }

 
  console.log(pomResponse.pomXml.version);
  
});
