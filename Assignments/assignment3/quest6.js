console.log("    Question - 6  ");

let z = require("readline-sync");
let n = z.questionInt("Enter Day number: ");

switch (n) {
    case 1:
        console.log("1 - Sunday");
        break;
    case 2:
        console.log("2 - Monday");
        break;
    case 3:
        console.log("3 - Tuesday");
        break;
    case 4:
        console.log("4 - Wednesday");
        break;
    case 5:
        console.log("5 - Thursday");
        break;
    case 6:
        console.log("6 - Friday");
        break;
    case 7:
        console.log("7 - Saturday");
        break;
            
    default:
        console.log("Invalid Choice");
        break;
}