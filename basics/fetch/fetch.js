fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => ddata(data))
.catch((er) => console.log(er));

function ddata(data) {
    console.log(data);
    // const user = data;
    const ele = document.getElementById("user-data")
    let html_data = ``;

    data.forEach((user) => {
        html_data +=
        ` <tr> 
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td> 
        </tr>`

    });
    ele.innerHTML = html_data ;
}