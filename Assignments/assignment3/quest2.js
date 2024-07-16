console.log("   Question-2    ");

let z = require("readline-sync");

let sum = 0;
let n = z.questionInt("Enter limit: ");
for(let i = 1;i<=n;i++){
    if(i%2 != 0){
        sum = sum + i;
    }
}
console.log(`The sum is ${sum}`);