let age = 2;
const prom = new Promise((accept,reject) => {
    if(age > 20){
        accept("Access Granted !!");
    }else{
        reject("Access Rejected");
    }
}).then((res) => console.log(res)).catch((res) => console.log(res));