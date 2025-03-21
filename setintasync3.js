
let count=0;
let sid=setInterval(()=>{
    count++
    console.log("Loading...")
    if(count==5){
        
        clearInterval(sid)
        console.log("Loaded Successfully!");
    }
},1000)