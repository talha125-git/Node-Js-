// console.log("talha1");

// setTimeout(() =>{
//     console.log("talha2");
// },2000)

// console.log("talha3");


// a = 10
// b = 20

// setTimeout(() =>{
//     b=130
//     console.log(a+b);
// },2000)

// console.log(a+b);

// Async 
const { error, log } = require('console')
// const fs = require('fs')
// fs.readFile("file.txt", "utf-8", (error,data)=>{
//     if (error) {
//      return false   
//     }
//     console.log(data);
    
// })
// console.log("End Scrpit");


// Sync
const fs = require('fs')
const data = fs.readFileSync("file.txt", "utf-8",);
    console.log(data);
    

console.log("End Scrpit");

