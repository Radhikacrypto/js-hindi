 //object literals

 const mysym= Symbol("key1");//creating symbol 
 const mysym1=Symbol("key2");
const jsuser={
    name: "radhika",
    age: 18,
    "full name":"Radhika Bacharwar",//to access this we have only one method i.e is method 2 only so please note it 
   mysym1: "mykey1",//passing as key but still it is not acting as symbol data type 
   [mysym]: "mykey1",//ek symbol liya usse define kiya au rkeys ki tarah use kiya 
   location: "lucknow",
    email: "user@gmail.com",
    isloggedin: false,
    lastLogInDays: ["monday", "saturday"]
}

console.log(jsuser.name);//method 1 to access something 
console.log(jsuser["email"])//method 2
//here email is kind a string so in double quotes
console.log(jsuser["full name"]);
console.log(jsuser[mysym1]);
console.log(jsuser[mysym]);//accessing a symbol..we wont use double quotes here

jsuser.email="radhika@chatgpt.com";
//Object.freeze(jsuser);
//jsuser.email="radhika@microsoft.com";
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
    console.log(`i get to know ur name is ${this.name}`);//notice how we passed name of object
}
console.log(jsuser.greeting());