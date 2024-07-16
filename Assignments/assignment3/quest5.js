console.log("    Question - 5   ");

let z = require("readline-sync");
let age1 = z.questionInt("Enter Your Age: ");
let age2 = z.questionInt("Enter your friends age: ");

if( age1 === age2){
    console.log("You Both are of the same age");
}
else if(age1 > age2){
    console.log("You are Older than Your Friend");
}
else{
    console.log("Your Friend is Older than You");
}
