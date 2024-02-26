// if

// if(condition){
// //execute if condition is true 
// }

const isUserLoggedIn=true;
if(2=="2"){
 console.log("exceuted")
}

if(2==="2"){
    console.log("2==='2' ");//not executing 
}

//= ->assignment 
//== ->checks for equality of values 
//=== -> checks equality as well as data type 

//if(balc>200) console.log("..."), console.log("test2..");
// not a good practice to write code 

const UserLogin =true
const debitcard=true
const LOggin_Google=false
const Login_email=true


if(UserLogin&& debitcard){
    console.log("u cam log in ");
}

if(Login_email || LOggin_Google){
    console.log("or statemnet is working ");
}

//Nullish Coalenscing Operator(??): null undefined
//helps in error handling eg: null and undefined 
let val1;
val1=5 ?? 10;
console.log(val1);//yaha pehli value lelega 
val1= null?? 10;//yaha pe null hai isliye avoid karke second value lega 
console.log(val1);
val1 =undefined??15;//yaha undefined hai isliye usse ignore karke dusri value lelega 

console.log(val1);
val1=null?? 10 ?? 12;//null ko skip phir jo pehla mila 
console.log(val1);

//terniary operator 

//consition ? true : false
const iceTea= 34;
iceTea >=20 ? console.log("greater than 20") : console.log("less than 20 ");