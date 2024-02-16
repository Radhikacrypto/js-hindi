console.log("conversion");
let score =33;
//knowing type
console.log(typeof score);
console.log(typeof (score));//passing score as method

score="33";
let value=Number (score);//yeh gurantee hai ki yeh number hai 
//for type def like here number n will be capital same for all data types..String, Boolean etc..
console.log("notice the value of value as we change the score ")
console.log("passing normally 33: "+(typeof value));
console.log("actual value of value: "+value);
 
score="33abc";
value=Number (score);
console.log("passing normally 33abc: "+(typeof value));
console.log("actual value of value when score is 33abc: "+value);

score=null;
value=Number(score);
console.log("passing normally null: "+(typeof value));
console.log("actual value of value when score is null: "+value);

score=undefined;
value=Number(score);
console.log("passing normally undefined: "+(typeof value));
console.log("actual value of value when score is undefined: "+value);

//"33"=> 33
//"33abc" =>NaN
//true=>1    false=>0

let isLoggedIn="hitesh";
let booleanloggedin= Boolean(isLoggedIn);
console.log("hitesh=> "+booleanloggedin);

let isLoggedIn2="";
 booleanloggedin= Boolean(isLoggedIn2);
console.log("only double quotes nothing inside=> "+booleanloggedin);
let isLoggedIn3="1";
 booleanloggedin= Boolean(isLoggedIn3);
 console.log("1=> "+booleanloggedin);

 let someNum=33;
 let stringNum= String(someNum);
 console.log(stringNum);
 console.log("type of: "+(typeof stringNum));



