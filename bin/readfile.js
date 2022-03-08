const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({ attrkey: "ATTR" });

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync("./pom.xml", "utf8");
var version;
var name;
parser.parseString(xml_string, function(error, result) {
    if(error === null) {
		name=result.project.name[0];
        version=result.project.version[0];
    }
    else {
        console.log(error);
    }
});

var version=console.log(version);
var name=console.log(name);
