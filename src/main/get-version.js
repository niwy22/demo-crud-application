var convert = require('xml-js');
ignoreUndefined = true;
var xml = require('fs').readFileSync('././pom.xml', 'utf8');

var result = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(result);
var json=JSON.stringify(result);
//var project= xmlDoc.getElementsByTagName("version")[0];
//var result1 = convert.xml2json(project, {compact: true, spaces: 4});
//const errorNode = result.querySelector("parseerror");
const project= result.project.artifactId._text;
console.log(project);
