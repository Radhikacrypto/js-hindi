const user={
    username: "radhika",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
//this refers to current context(matlab values)

// user.welcomeMessage();//method hai isliye () yeh use kiya hai 
// user.username="sam";
// user.welcomeMessage();

// console.log("using console.log(this)");
// console.log(this)//iska output {} yeh aata hai ...kyuki hum node enviornment ke andar hai or node ke andar thi is referring to an empty object 
//try running this command on developres tool u will notice the distance 

// function chai(){
//     let username= "radhika"
//     console.log(this )
// }

// chai()

// const chai=function(){
//     let username ="hitesh"
//     console.log(this.username);
// }

// chai()  //this gives the output as undefined 

// const chai=() => {
//     let username="radhika"
//     console.log(this);
// }

// chai()

//++++basic arrow functiom+++
const addTwo=(num1, num2) => {
    return num1+ num2
}

console.log(addTwo(3,4));

//implicit return

const SubTwo = (num1, num2) =>  num1- num2
const a=() => ({username: "radhika"})//if u do not use paraenthesis() then undefined will be shown 


console.log(SubTwo(34,2))
console.log(a());

