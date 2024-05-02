//promise banao ..aur at end resolve daaldo jaise hi usse resolve milega woh then function execute kar dega
const promiseOne= new Promise(function(resolve, reject){
    //do asyn task
    //DB calls , cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()//agar aap resolve nhi likhenge toh promise consumed show nhi hoga so imp 

    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
console.log('async 2 resolved')
})

const promiseThree=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'chai', email: "abcd@mail.com"})
    })
})
