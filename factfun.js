function createEmployee(name,role,salary){
    return{
        name,
        role,salary,
        introduce(){
            console.log(`Hello, I am ${this.name} working as a ${this.role}`)
        }
    }
}

const employee1 = createEmployee("Alice", "Developer", 60000);
employee1.introduce();
// let emp2=createEmployee("Mahesh","SDE",7777000)
// console.log(emp2.name,emp2.role)