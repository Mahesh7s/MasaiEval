let arr1=[5,8,9,20,27,12,14];
let arr2=[8,9,77,34,42,63,9];
function evenArr(arr){
    return arr.filter((ele)=>ele%2==0);
}
function sortConcat(arra1,arra2){
    let sort1=arra1.sort((a,b)=>{return a-b});
    let sort2=arra2.sort((a,b)=>{return a-b});
    console.log("Sorted Array 1:",sort1);
    console.log("Sorted Array2:",sort2);
    let combinearr=sort1.concat(sort2);
    return combinearr;
}
function sumarr(arra){
    let arrw=arra.reduce((acc,curr)=>{
        return acc+curr;
    },0)
    return arrw;
}


console.log(evenArr(arr1));
console.log(evenArr(arr2));
console.log(sortConcat(arr1,arr2));
console.log(sumarr(arr1));
console.log(sumarr(arr2));