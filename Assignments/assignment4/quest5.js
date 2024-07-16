console.log("Question - 5");


let a = [10,90,30,40]
// console.log(a);
findLargest(a)

function findLargest(a){
    let max = 0;
    for(let ele of a){
        if(ele > max){
            max = ele;
        }
    }
    console.log(max);
}