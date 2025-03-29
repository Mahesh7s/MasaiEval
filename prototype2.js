function Person(name,age){
    this.name=name,
    this.age=age
}
Person.prototype.introduce=function(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
}

let p1=new Person("Mahesh",25)
console.log(p1,p1.name)
p1.introduce()

function Employee(arr,title){
    Person.apply(this,arr)
this.jobTitle=title
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee
Employee.prototype.work=function(){
    console.log(`${this.name} is working as a ${this.jobTitle}`)

}

let e1=new Employee(["Tharun",20],"SDE")
e1.introduce();
e1.work()