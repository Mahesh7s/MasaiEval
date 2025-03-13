const library = {
    name: "Central Library",
    established: 1985,
    sections: {
      fiction: { books: 200, librarians: 3 },
      science: { books: 150, librarians: 2 },
      history: { books: 100, librarians: 1 }
    },
    members: [
      { name: "Amit", age: 25, borrowedBooks: ["fiction", "science"] },
      { name: "Priya", age: 30, borrowedBooks: ["history"] },
      { name: "Raj", age: 22, borrowedBooks: ["fiction", "history"] }
    ]
  };
  
  const newSection = {
    philosophy: { books: 80, librarians: 1 }
  };
  
  function updatelibrary(obj,sec){
      let newonj={
          ...obj,
          
          sections:{
                          ...obj.sections,
                          ...obj.sections=sec,
          }
      }
      return newonj;
  }
  console.log(updatelibrary(library,newSection))