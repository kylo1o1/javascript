fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => disData(data))
.catch((err) => console.log(err));

function disData(data) {
    // console.log(data);
    const elem = document.getElementById("tab-body");
    let h_data = ``;
    const newObj = {};
    data.forEach(task => {
        const newId = task.userId;
        if(!newObj[newId]){
            newObj[newId]={
                tasks: 0 ,
                c_tasks: 0,
                p_tasks: 0
            };
        }
        newObj[newId].tasks +=1;
        if(task.completed){
            newObj[newId].c_tasks += 1;
        }else{
            newObj[newId].p_tasks += 1;
            
        }
    });
    for(const newId in newObj ){
        const ele = newObj[newId];
        h_data +=`<tr>
        <td>${newId}</td>
        <td>${ele.tasks}</td>
        <td>${ele.c_tasks}</td>
        <td>${ele.p_tasks}</td>
        </tr>
        `
    }
    
    console.log(newObj);
    elem.innerHTML = h_data;
}