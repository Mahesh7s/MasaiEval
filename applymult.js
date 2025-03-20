
function multiply(){
    return this.a*this.b;
}
let obj1={
    a:6,b:7
}
let obj2={
    a:9,b:8
}
console.log(multiply.apply(obj1))
console.log(multiply.apply(obj2))