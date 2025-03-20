let obj1={ name: "Alice", hobbies: ["reading", "traveling"] }
function deepcopy(obj){
    return JSON.parse(JSON.stringify(obj1))
}
let obj2=deepcopy(obj1);
obj2.hobbies.push("Coding");
//obj2.rating=7
console.log("Cloned object: ",obj2);
console.log(obj1)