let obj1={
    name:"Mahesh",
    age:25,
}
let obj2={
    name:"Lcifer",
    age:27
}
function display(){
    console.log("Name:",this.name);
    console.log("Age:",this.age);
}

display.call(obj1)
display.call(obj2)