const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
  ];
  
  let arra1=studentsProgress.filter(({completedLessons,totalLessons})=>{
      let progress=(completedLessons/totalLessons)*100;
      return progress>=50;//to filter students whose progress is atleast 50%
  }).map((ele)=>({
          name:ele.name,
          completionPercentage:(ele.completedLessons/ele.totalLessons)*100//adding the completion percentage of active syudents
      
  }))
  let toplist=arra1.filter((ele)=>ele.completionPercentage>80)
  //filtering the lop list students
  console.log(toplist)
  let arr3=arra1.reduce((acc,curr)=>{
      acc+=curr.completionPercentage;
      return acc
  },0)
  //calculating the average completion percentage
  let averagecomp=arr3/arra1.length;
  
  
  console.log(arra1)
  
  console.log("Average course completion percentage is :",averagecomp)