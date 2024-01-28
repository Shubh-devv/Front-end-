const prompt = require('prompt-sync')();//using prompt 

let a1 = prompt("Enter your First Numbers: ");
let b1 = prompt("Enter your Second Numbers: ");
 
a1 = parseInt(a1);
b1 = parseInt(b1);
if (a1>b1) {
    console.log("A is largest");
}

else{
    console.log("B is largest");
}