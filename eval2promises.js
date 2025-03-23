












//Here's the code for problem 2


function taskManager(){
    let list=[];
    return{
        addTasks(task){
            list.push(task);
            return task;
        },
        displayTask(){
            return list.forEach((ele)=>console.log(ele))
        },
        markComplete(taskid){
            return list.map((ele)=>{
                if(ele.id===taskid){
                    ele.completed=true;
                }return ele;
            }).forEach((ee)=>{if(ee.id==taskid)console.log(ee)})
        },
        removetask(taskid){
            for(let i=0;i<list.length;i++){
                if(list[i].id===taskid){
                    list.pop(list[i])
                }
            }
        },
        getAlltasks(){
            return JSON.stringify(list)
        },
        getPendingTasks(){
            let ptask=list.filter((ele)=>ele.completed===false).map((ele)=>ele.title)
            return ptask
        },
        getCompletedTasks(){
            let ptask=list.filter((ele)=>ele.completed===true).map((ele)=>ele.title)
            return ptask
            
        },
        sortTasks(){
            let sortl=list.map((ele)=>ele.title).sort((a,b)=>{
                return a.localeCompare(b)
            })
            return sortl
            
        }
    }
}

let task1={
    id:1,
    title:"Reading",
    completed:false
}
let task2={
    id:2,
    title:"Cooking",
    completed:false
}
let task3={
    id:3,
    title:"Painting",
    completed:false
}
let task4={
    id:4,
    title:"Washing",
    completed:false
}
let tasklist=taskManager();
console.log(tasklist.addTasks(task1))
 console.log(tasklist.addTasks(task2))
 console.log(tasklist.addTasks(task3))
 //console.log(tasklist.removetask(3))
console.log(tasklist.addTasks(task4))
 tasklist.markComplete(2)
console.log(tasklist.getAlltasks())
console.log(tasklist.getPendingTasks())
console.log(tasklist.getCompletedTasks())
console.log(tasklist.sortTasks())




////////////////////////////////////////////////////////////////////////
//Here's the Pronlem-1 code
function createStudentManager(){
    let students=[];
    return {
        addStudent(stu){
            students.push(stu)
            return stu
            
        },
        addnewSubject(id,sub,marks){
            return students.map((ele)=>{
                if(ele.id===id){
                    ele[sub]=marks
                    return ele
                }else{
                    return ""
                }
                
            })
        },
        updateScore(id,sub,marks){
            return students.map((ele)=>{
                if(ele.id===id){
                    ele[sub]=marks;
                }return ele
            })
        },
        getstudentDetails(id){
            let det=students.filter((ele)=>ele.id===id)
            if(det.length>0)
            return det.forEach((ele)=>console.log(ele));
            else return `Student Not Found`
            
        },
    }
}
let s1={
    id:001,
    name:"Mahesh",
    Maths:77,
    Social:90,
    Science:67
}
let s2={
    id:007,
    name:"hami",
    Maths:77,
    Social:80,
    Science:67
}
let details=createStudentManager()
console.log(details.addStudent(s1))
console.log(details.addnewSubject(001,"Telugu",89))
console.log(details.getstudentDetails(002))
console.log(details.addStudent(s2))
console.log(details.addnewSubject(007,"Telugu",19))
console.log(details.updateScore(007,"Social",80))



