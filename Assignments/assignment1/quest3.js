console.log("    Question 3   ");
let z = require("readline-sync");
let apple = 2;
let banana = 1.5;
let orange = 3;

console.log("\nHow many Kilos Do You Want?\n");
let a = z.questionInt("Apple: ");
let b = z.questionInt("\nBanana: ");
let c = z.questionInt("\nOrange: ");

let totalCost = (apple * a) + (banana * b) + (orange * c);
console.log(`\nThe Total cost is ${totalCost}`);