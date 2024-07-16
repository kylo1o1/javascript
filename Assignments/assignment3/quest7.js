console.log("    Question - 6  ");

let z = require("readline-sync");

let grade = z.questionInt("Enter your Mark: ");

if(grade >= 90){
    console.log("A");
}
else if(grade < 90 && grade >=80 ){
    console.log("B");
}
else if(grade >=70 && grade < 80){
    console.log("C");
}
else if(grade >= 60 && grade <70 ){
    console.log("D");
}
else if(grade >= 50 && grade < 60){
    console.log("E");
}
else{
    console.log("Failed");
}