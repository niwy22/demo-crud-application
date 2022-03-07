const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({ attrkey: "ATTR" });

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync("C:/Users/niweditar/Videos/demo-crud-application/pom.xml", "utf8");
var con1
parser.parseString(xml_string, function(error, result) {
    if(error === null) {
		//console.log(result);
        con1=result.project.version;
    }
    else {
        console.log(error);
    }
});

var json=JSON.stringify(con1)
console.log(json);

