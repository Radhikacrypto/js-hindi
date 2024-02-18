// const score=400;//automatically defined
// const num=new Number(300);//specially cast 
// // try writing above two in console 
// console.log("score is: "+score);
// console.log("using new Number "+num);
// console.log("changing num to string using .tostring "+num.toString());
// const str1=num.toString//converting num to string
// console.log("str1 type is: "+typeof str1);
// console.log("the length of num after converting to string is: "+num.toString().length);
// // for precision values
// console.log("using to Fixed : "+num.toFixed(3));
// var num2=23.8966;
// console.log("using  precision on 23.8966: "+num2.toPrecision(3));
// num2=123.8699;
// console.log("using precision on 123.8966: "+num2.toPrecision(3));
// num2=1123.8966;
// console.log("using precision on 1123.8966: "+num2.toPrecision(3));
// const hundred=1000000;
// console.log("normal to local string => "+hundred.toLocaleString());
// console.log(" to local string according to indian standard => "+hundred.toLocaleString('en-IN'));


//++++++++++MATHEMATICS++++++++++////
console.log(Math);
console.log("absolute value of -4: "+Math.abs(-4));
console.log("absolute value of 4: "+Math.abs(4));
console.log("rounding of 4.1=> "+Math.round(4.1));
console.log("rounding of 4.9=> "+Math.round(4.9));
console.log("rounding 4.1 using ceiling function=> "+Math.ceil(4.1));
console.log("rounding 4.9 using floor function=> "+Math.ceil(4.9));
console.log("finding min of array "+Math.min(2,34,56,35,67));
console.log("finding max of array "+Math.max(2,34,56,35,67));

//to get random number between a range 
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min +1))+ min);



