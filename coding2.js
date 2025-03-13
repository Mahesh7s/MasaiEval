const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];
  
  let minarray=movies.map((ele)=>{
      return {
          ...ele,
           watchTime: Math.round((ele.watchTime/60))
           //converting minutes to hours using round()
      }
  }).filter((ele)=>ele.rating>7.5)//filtering the highly rated movies
  
  //console.log(minarray)
  
  let arr1=minarray.map((ele)=>{
      return{
          //creating new array for extracting the title and watchtime of highly rated movues
          title:ele.title,
          watchTime:ele.watchTime
          
      }
  })
  console.log("Best Movies:-",arr1)
  let totalhours=minarray.reduce((acc,curr)=>{
      return acc+=curr.watchTime;//calculateing the total watchtime
  },0)
  console.log("Total Watchtime:",totalhours,"hours")