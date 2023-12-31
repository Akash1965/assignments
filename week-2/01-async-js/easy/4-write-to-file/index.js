const fs = require("fs");

const content = 'My name is Akash';
fs.writeFile('./demo.txt', content, function(err) {
    if(err) {
        console.log(err);
    }
});