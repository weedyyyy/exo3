
const { error } = require('console');
var fs = require('fs');
var path = require('path');

foldername = "folder1"



function look(file,text) {
    fs.readFile(file,'utf8',function(error,data) {
      theFileText =  data.toString()
      if (theFileText.match(text) == null) {
        console.log("none");
      }
      else{
        
    const pathname =   path.parse('/folder1/hello.txt').name
        console.log(pathname);
      }
    })
} 

 look('./folder1/hello.txt','chihab')





 