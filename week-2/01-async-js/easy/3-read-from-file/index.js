const fs = require("fs");
fs.readFile('./demo.txt', 'utf-8', function(err, data) {
    console.log(data);
});

let count = 0;
for(let i=0; i<1000000000000000; i++) {
    count++;
}