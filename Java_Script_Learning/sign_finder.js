const prompt = require('prompt-sync')();//using prompt 

let a1=prompt("Enter Your First Number- ")
let b1=prompt("Enter Your Second Number- ")
let c1=prompt("Enter Your Thired Number- ")

a1 = parseInt(a1);
b1 = parseInt(b1);
c1 = parseInt(c1);

let a=a1*b1*c1
if(a>0)
{
    console.log("+ sign is Present");
}
else {
    console.log(" - Sign is Present");
}


