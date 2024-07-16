console.log("      Question-1     ");

let z = require("readline-sync");

let n = z.questionInt("Enter a number: ");

for(let i=1;i<=10;i++){
    let p = i*n;
    console.log(`${i} x ${n} = ${p} `);
}