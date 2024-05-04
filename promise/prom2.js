const prom1=new Promise(function(resolve, reject){
    //do an async task
    //db calls. cryptography 
    setTimeout(() => {
        console.log('asyn task is complete')
        resolve()//is mai value pass bhi kar sakte hai jais epehle humne harry pass kiya aur yehi .then call karta hai 
    }, 1000);
})
prom1.then(function(){
    console.log("promise consumed")
})
//another way to declare without storing it in a single variable 
new Promise(function(resolve, reject){
 setTimeout(() => {
    console.log('async task 2')
 }, );
}).then(()=>{
    console.log("asyn 2 resolved")
})

const prom3= new Promise((resolve, reject)=>{
    setTimeout(() => {
        
    }, 1000);
})

