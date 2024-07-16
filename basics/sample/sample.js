function valid(e){
    e.preventDefault();
    console.log();
    let name = document.getElementById("name").value;
    if(name.length === 0){
        alert("No name");
        document.getElementById("name").style.backgroundColor = "red";
    }
}