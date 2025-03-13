const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];
  
  let {name,sport}=athletes[0]
  //extracting name and sport of first player using destructuring
  console.log(`${name} plays ${sport}`)
  let {scores}=athletes[2]
  //extracting the scores of Neeraj
  //console.log(scores)
  let[score1,score2,...otherscores]=scores
  //destructing the first two scores and third uding rest operator
  console.log(score1,",",score2,",",otherscores)
  
  //creating newobject to update age,worldchampion
  let newobje={
      ...athletes[2],//using spread operoator to use existing details
      age:27,
      worldChampion:true
  }
  let allscores=[]//empty array to sacore all scores
  
  for(let i=0;i<athletes.length;i++){
      //traversing all the scores in athletes objects
      let {scores}=athletes[i];
      allscores=[...allscores,...scores];
      //for storing all scores 
  }
  
  //console.log(neww)
  console.log(newobje)
  console.log(allscores)