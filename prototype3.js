function Car(make,model,year,isavail=true){
    // car constructor function
    this.make=make,
    this.model=model,
    this.year=year,
    this.isAvailable=isavail
}


// cretaing customer constructor function
function Customer(name,arr=[]){
    this.name=name,
    this.rentedCars=arr
}
// creating rentCar function for customer prototype
Customer.prototype.rentCar=function(car){
    if(car.isAvailable){//checking whether car is avaiable not
        car.isAvailable=false;
        this.rentedCars.push(car)
        console.log(`${this.name} is taken ${car.make}`)
    }else{
        console.log("Car is Already Rented");
    }
    
}
// creating returnCar for customer 
Customer.prototype.returnCar=function(car){
    setTimeout(()=>{
    
    car.isAvailable=true;
    //console.log(car.make)
    let index=this.rentedCars.findIndex((c)=>c==car)
    this.rentedCars.splice(index,1);
    console.log(`${this.name} returned ${car.make}`)
}),2000

}

function PremiumCustomer(arr,drate){
    Customer.apply(this,arr)
    this.discountRate=drate
}
PremiumCustomer.prototype=Object.create(Customer.prototype)
PremiumCustomer.prototype.constructor=PremiumCustomer


function calculaterent(car,days,drate=0){

    let baseprice=50;
    if(car.make==="Toyota") baseprice=65;
    else if(car.make==="Honda") baseprice=75;
    let total=baseprice*days;
    let discount=(total*drate)/100;
    let tcost=total-discount;
    return tcost;

}
function Maintenance(car,delay){
    console.log(`${car.make} is under maintainance`);
    setTimeout(()=>{
        car.isAvailable=true;
        
        console.log(`${car.make} is Available now`)
    },delay)
}
let car1=new Car("Toyota","Corolla",2020)
let car2=new Car("Honda","Heto",2017,false)
console.log(car1,car2)
let cust1=new Customer("Mahesh")
let cust2=new Customer("Tharun")
console.log(cust1)
cust1.rentCar(car2)
let car3=new Car("HUKUM","TEET",2022)
let car4=new Car("Hero","Honda",2019)

cust2.rentCar(car1);
console.log(cust2.rentedCars)
cust2.returnCar(car1);

let pre1= new PremiumCustomer(["Mah"],10)
pre1.rentCar(car3);
//console.log(">>>>>>>>>>")
pre1.returnCar(car3);

let rent1= calculaterent(car1,7)
console.log("RENT1:",rent1)
let rent2=calculaterent(car3,3,pre1.discountRate)
console.log("Rent 2:",rent2)


Maintenance(car2,2000)


//console.log(cust2.rentedCars)




// //console.log(cust1)
// let pre1= new PremiumCustomer(["Mah"],10)
// pre1.rentCar(car1)
// console.log(pre1.rentedCars)
// pre1.returnCar(car1)
// console.log(pre1.rentedCars)
