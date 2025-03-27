function createInventoryItem(name,category,price){
    return{
        name,category,price,
        describeItem(){
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
        
        }
    }
}

function addItemdiscount(item,dper){
    return{
        ...item,
        discountedPrice:item.price-(item.price*(dper/100)),
        applyDiscount(){
          console.log(`Discounted Price for ${item.name}: ${this.discountedPrice}`)
        }
    }
    
}

let obj1=createInventoryItem("Phone","Electronics",77770)
obj1.describeItem()
let de=addItemdiscount(obj1,20)
de.applyDiscount()