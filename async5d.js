function timer(duration,callback){
    setTimeout(()=>{
        callback(duration);
    },duration)
}
function onComplete(dur){
    console.log(`Timer of ${dur} ms finished`);
}

timer(2000,onComplete)