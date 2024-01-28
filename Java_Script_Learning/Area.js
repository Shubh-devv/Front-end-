const prompt = require('prompt-sync')();//using prompt 

const Height = prompt("Enter Triangle Height Value- ");
const Base = prompt("Enter Triangle Base Value- ");

const area= (Height*Base) / 2;

console.log(`The Area of Triangle is ${area}` );
