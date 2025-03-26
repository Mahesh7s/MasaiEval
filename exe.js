

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((resp)=>console.log(resp.map(ele=>ele.name)))