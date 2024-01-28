const prompt = require('prompt-sync')();//using prompt 

const a= prompt("Enter First value - ");
const b = prompt(`Enter Second Value - `);

let temp;

temp=a;
a=b;
b=temp;


console.log(`The value of After Swapping ${a} ${b}`);