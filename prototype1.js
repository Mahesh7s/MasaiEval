function Animal(type){
    this.type=type;
}
Animal.prototype.sound=function(){
    console.log("Animal Sound");
}

function Dog(type){
    Animal.call(this,type)

}
let cat=new Animal("Animal")
console.log(cat.type)
cat.sound()
//console.log(Dog.prototype)
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.sound=function(){
    console.log("Bark...");
}
let mydog1= new Dog("Mammal")
console.log(mydog1.type)
mydog1.sound()
let mydog2= new Dog("Crimal")
console.log(mydog2.type)
mydog2.sound()
console.log(mydog1.__proto__.__proto__===Animal.prototype)



