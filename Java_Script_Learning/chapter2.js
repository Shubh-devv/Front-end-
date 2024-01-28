//capter 2

//Q1

// let a1 = prompt("Enter your age :- ")
// a1 = parseInt(a1); 
// if(a1>10 && a1<20)
// {
//     console.log("Your agr lies on 10-20")
// }

const prompt = require('prompt-sync')();//using prompt 

let a1 = prompt("Enter your age: ");
a1 = parseInt(a1);

if (a1 > 10 && a1 < 20) {
    console.log("Your age lies between 10 and 20");
}