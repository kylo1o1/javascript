function validate(e){
    e.preventDefault();
    console.log("Invoked");
    
    let fullname = document.getElementById("fullname").value;
    let age = document.getElementById("age").value;
    let gmail = document.getElementById("email").value;
    console.log(`Name: ${fullname} /\n age: ${age} \n email: ${gmail}`);
    if (fullname.length === 0){
        let nameerror = document.getElementById("name error");

    }
    if( age === 0){
        
    }
    // console.log(fullname);
}