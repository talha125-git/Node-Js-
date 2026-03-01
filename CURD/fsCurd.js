const fs =  require('fs')

//               Create banana.txt in files folder 
// fs.writeFileSync("files/banana.txt","This is fruit");

//              want to delete banana file in files folder
// fs.unlinkSync("files/banana.txt")

//              SEE what is inside txt file
// const data = fs.readFileSync("files/apple.txt","utf-8");
// console.log(data);

//              add more text in  apple.txt
fs.appendFileSync("files/apple.txt","and this is a good  for health")