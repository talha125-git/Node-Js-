// file system 

let fs = require("fs");
fs.writeFileSync("module.txt","this file has been made from module.js")

let os = require('os');
console.log(os.platform());
console.log(os.hostname());
// console.log(os.cpus());

// lets chnage console.log to console.talha in this file

console.talha = function (msg) {
    console.log(msg);
};
console.talha("hi this is talha");
