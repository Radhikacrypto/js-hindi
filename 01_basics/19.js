function sayMyName(){
 console.log("R");//scope or definition of function
console.log("a");
console.log("D");
console.log("H");
console.log("I");
console.log("K");
console.log("A");
}

sayMyName();//reference of a function 
function add2Numbers(number1, number2) {
    console.log(number1+number2);
}
console.log("passing (3, 4) ")
add2Numbers(3, 4);
//coz humne yaha pe parameters ke saath data type define nhi kiya isliye yeh kuch bhiaccept karleta hai 
console.log("passing ( 3, 'a') ")
add2Numbers(3, "a");
console.log("passing (3, '4') ")
add2Numbers(3, "4");

let result = add2Numbers(3,4);
console.log("result is : "+result);//we have not used return here so we are note getting anything in the return 

function sub(number1, number2) {
    let result=number1-number2;
    return result;
    //console.log("radhika ");.... yeh kaam nhi karega kyuki ek baar return kiya matlab understood hai ki definition khatam hai 
    // we can also write retunr number1-number2;
}
result= sub(35, 23);
//console.log(result);

function loginUserMessage(username){
    //we can give default values as well 

    //function loginusername(username="radhka")
    if(username===undefined){
        console.log("please enter a username ");
        return
    }
    retunr `${username} just logged in`
}
console.log(loginUserMessage("Radhika"));
console.log("no input or value is nit passed "+ loginUserMessage());





