console.log("    Question 2   ");

let z = require("readline-sync");
let borrow1 = z.questionInt("Enter Borrowed money 1:  ");
let borrow2 = z.questionInt("Enter Borrowed money 2:  ");
let borrow3 = z.questionInt("Enter Borrowed money 3:  ");
let totalBorrow = borrow1 + borrow2 + borrow3 ;


let repay1 = z.questionInt("Enter Repayment amount 1: ");
let repay2 = z.questionInt("Enter Repayment amount 2: ");
let repay3 = z.questionInt("Enter Repayment amount 3: ");
let totalRepay = repay1 + repay2 + repay3;

let remainingAmount = totalBorrow - totalRepay ;

console.log(`Total Borrowing = ${totalBorrow} \n Total Repayment = ${totalRepay} \nRemaining Amount = ${remainingAmount}`);