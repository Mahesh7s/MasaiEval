import {Book,booklist} from "./books.js"
//importing the book and booklist ffrom book file
// adding books into booklist
let b1=new Book("The Life of Pi","Richard Parker",1960);
let b2=new Book("Thw Wings of Fire","A.P.J Abdul Kalam",2010)
let b3=new Book("Living seagull","Moka",1977)
let booksum=booklist.map((ele)=>ele.getSummary())
//getting sumary of eachbook
console.log(booksum)
