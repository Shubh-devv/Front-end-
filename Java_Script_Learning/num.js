const prompt = require('prompt-sync')();//using prompt 

function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }
  
let a = prompt ("Enter Your Value -");
a = parseInt(a);
if(isNumber(a))
{
    console.log("Input is Number");
}

else{
    console.log("Input is Not Number");
}