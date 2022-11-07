const fs = require('fs');
const path = require('path');

function lookForfilders(word, filepath) {
    fs.readdir(filepath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
        }
        else {
            files.forEach(file => {
                if (file.isDirectory()) {
                    lookForfilders(word, filepath + '/' + file.name)
                } else {
                    lookinside(word, filepath + '/' + file.name)
                }
            })
        }
    })
}



function lookinside(word, filepath) {
    // now lazm n9raw file donc
    fs.readFile(filepath, 'utf8', function (error, data) {
        if (error) {
            console.log(error.message);
        } else {
            theFileText = data.toString()
            if (theFileText.match(word) == null) {
                console.log("none matchs found here");
            }
            else {
                console.log(`kayn ${word} f file li ismo  :  `);
                console.log(filepath);
            }
        }
    })
}

lookForfilders('chihab', "./")