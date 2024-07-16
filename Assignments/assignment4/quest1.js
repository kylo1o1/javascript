console.log("Question - 1 ");
let z = require("readline-sync");
let name = z.question("Enter a name: ");
greet(name)

function greet(name) {
    
    console.log(`Hello ${name}`);
}