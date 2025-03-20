function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    students.splice(1, 0, "David");

    console.log(students.includes("Eve"));  

    console.log(students.join(", "));  
    
   return students;
}

let res=manageStudents();
//console.log(res)
res.splice(2,0,"Mahesh","Moka")
console.log(res)
console.log(res.includes("Mahesh"))
console.log(res.includes("Jai"))
console.log(res.join(", "))
