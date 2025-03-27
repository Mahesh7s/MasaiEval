async function fetchdata(){
    try{
        let res=await fetch("https://fakestoreapi.com/products");
        let resp=await res.json();
        let data=resp.reduce((acc,ele)=>acc+ele.price,0)
        console.log("TOTAL PRICE:",data)
    }
    catch(err){
        console.log(`ERROR Occur: ${err}`)
    }
}
fetchdata()
