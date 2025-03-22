function fetchData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                res("Success")
            }
            else{
                rej("Failed!!!!!!!!");
            }
        },2000)
    })
}
async function fetchDataHandler(){
    
       try{
           let res= await fetchData();
           console.log(res);
           console.log("Fetched Data Successfully");
       }
       catch(err){
           console.log("Error fetching data")
           console.log(err)
       }
}

fetchDataHandler()
fetchDataHandler()
fetchDataHandler()