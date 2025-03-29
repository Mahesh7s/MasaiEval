function Book(title,author,isavail=true){
    this.title=title,
    this.author=author,
    this.isAvailable=isavail
}
function Member(name,bbooks=[]){
    this.name=name,
    this.borrowedBooks=bbooks
}
Member.prototype.borrowBook=function(book){
    let limit=3
    if(this.specialAccess){
        limit=5
    }
    if(book.isAvailable){
        if(this.borrowedBooks.length<limit){
        book.isAvailable=false;
        this.borrowedBooks.push(book)
        console.log(`${this.name} borrowed ${book.title}`)
        }else{
            console.log("Max Limit Reached!!!")
        }
    }else{
           console.log("Book is Already Borrowed")
    }
}

function PremiumMember(name,splAccess){
    Member.call(this,name);
    this.specialAccess=splAccess;
}
PremiumMember.prototype=Object.create(Member.prototype)
PremiumMember.prototype.constructor=PremiumMember



let b1=new Book("ABC","Mahesh",false)
let b2=new Book("DEF","Moka")
let b3=new Book("GHI","Mah",false)
let b4=new Book("JKL","Mok")
let b5=new Book("MNO","Mahesh")
let b6=new Book("PQR","Mokam")
let b7=new Book("STU","Sloka")
let b8=new Book("VWX","Slloka")
let b9=new Book("YZ","Mloka")
let b10=new Book("abc","Mloka")
//console.log(b1,b2)


let m1=new Member("Mahesh")
let m2=new Member("Tharun")
//console.log(m1.borrowedBooks)
m1.borrowBook(b2)


let p1=new PremiumMember("Lavanya",true);
let p2=new PremiumMember("Mahi",false);
p1.borrowBook(b4)
p1.borrowBook(b5)
let bb=m1.borrowBook.bind(m1,b8);
bb()
// p1.borrowBook(b6)
// p1.borrowBook(b7)
// p1.borrowBook(b8)
// p1.borrowBook(b9)
// p1.borrowBook(b10)
// p1.borrowBook(b4)
// m1.borrowBook(b6)
m1.borrowBook(b7)//




