let arr =[15, 30, 45, 60, 75, 90];
function reversearray(array){
    let res=array.slice(2,5);
    let fina=[];
    for(let i=res.length-1;i>=0;i--){
        fina.push(res[i])
    }
    return fina
}
console.log(reversearray(arr));
console.log(arr)