const prompt = require('prompt-sync')();//using prompt 

let a1=prompt("Enter Your First Number- ")
let b1=prompt("Enter Your Second Number- ")
let c1=prompt("Enter Your Thired Number- ")

a1 = parseInt(a1);
b1 = parseInt(b1);
c1 = parseInt(c1);
// for(let i=0;i<3;i++)
//{
if(a1>b1 && a1>c1)
{
    if(b1>c1)
    {

       console.log(a1,b1,c1);
    }
    else{
        console.log(a1,c1,b1);
    }
    
}
else if(b1>a1 && b1>c1)
{
    if(a1>c1)
    {

       console.log(b1,a1,c1);
    }
    else{
        console.log(b1,c1,a1);
    }
    
}

else if(c1>a1 && c1>b1)
{
    if(a1>b1)
    {

       console.log(c1,a1,b1);
    }
    else{
        console.log(c1,b1,a1);
    }
    
}

else{
    console.log("Your all values are Zero");
}
//}