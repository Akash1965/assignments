const fs = require("fs");

let copyStr = "";
let count = 0;
fs.readFile('./demo.txt', 'utf-8', function(err, data) {
    for(let i=0; i<data.length; i++) {
        if(data.charAt(i) != ' ') {
            count = 0;
            copyStr += data.charAt(i);
        }
        if(data.charAt(i) === ' ') {
            count++;
            if(count === 1) {
                copyStr += ' ';
            }
        }
    }
    fs.writeFile('./demo.txt', copyStr, function(err) {
        if(err) {
            console.log(err);
        }
    });
});