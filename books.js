
let booklist=[];//creating empty array to store all books

function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    booklist.push(this)//adding book obj to booklist
}
Book.prototype.getSummary=function(){
    //prototype function to get summary of book
    return `${this.title} by ${this.author},published in ${this.year}`;
}
export { Book,booklist };// exporting book and booklist




