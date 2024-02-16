const accountID = 12444;
let accountemail ="radhika@gmail.com";
var accountPass ="1234";
accountCity="jaipur";//another way to write var 
let accountState;
//accountId = 2;  not allowed as we have used const 

accountemail="racb@gmail.com";
accountPass="3456";
accountCity="agra";
console.log("printing using console.log");
console.log(accountID);
console.log("printing using console.table");
console.table([accountID, accountemail, accountPass, accountCity, accountState]);
//let is used instead of var
//beacuse of issue in block scope and functional scope
//prefer to use let over var 

//agar aap js mai koi variable declare karke chod dete hai aur usse define nahi karte hai toh js gives output as undefined