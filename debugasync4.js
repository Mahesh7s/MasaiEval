console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); }, 0);// 
 Promise.resolve().then(() => { console.log("Promise Task"); }); //
 console.log("End");//

//  "Begin" --> immediately consoles as it is a synchronous js code
// set time out -->this line sends to WEB API part as it is a asynchronous code and waiting for completing delay time
//promise -->it also goes to WEBAPI part as it is a  promise code
//"End" -->it executes immediately becoasue it is a synchronous code


 //output
//  Begin
// End
// Promise Task
// Timeout Task