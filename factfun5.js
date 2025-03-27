function createLibrary(){
    let booklist=[];
    return{
       addbook(book){
        booklist.push(book)
        return book;
    },
    removebook(title){
        booklist=booklist.filter(ele=>ele.title!==title);
    },
    listbooks(){
        if(booklist.length==0){
            console.log("No book available")
        }else{
         booklist.forEach(ele=>ele.details())
        }
    }

        
    }
}

function Book(title,author){
    return{
        title,author,
        details(){
            console.log(`Book title: ${this.title} and author :${this.author}`)
        }
    }
}
let b1=Book("The LIFe of PI","Richard Parker");
let b2=Book("Thw wings of fire","APJ Abdul Kalam")
let library=createLibrary()
library.addbook(b2)
library.addbook(b1)
library.listbooks()
library.removebook("The LIFe of PI")
console.log("After removing one book");
library.listbooks()
