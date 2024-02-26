// switcch statemnent 
// switch(key){
//     case value:
//         ''''''
//         break;

//         default: 
//         break;
// }

const month =3

switch(month){
    case 1:
        console.log("january");
        break;// by default jaise hi case match hua uske baadh ka saara code execute hoga except default isliye humlog break lagate hai 
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("april");
        break;
    case "may":
        console.log("may")    
    default: 
           console.log("entered bigger than 4");
           break;    
}

//truth key values and false key values 
const userEmail = "radhika@gmai.com";
// const userEmail="";//gives else statement 
//const userEmai = []
if(userEmail){
    console.log("user email has some values ");
}
else{

    console.log("user email doesnt have any value its just empty double quotes ");
}

// agar humare pass ek string vlaue  hai toh mnke chalte hai ki humare pass true value hai matlab ki woh true hi hogi isliye upar bina comparison ke bhi hume outpur mil raha hai 
//
//false, o, -0, BigInt 0n, "", undefined, nan

// to check array is empty or not 
const a=[]
if(a.length===0){
    console.log("array is empty");
}

const emptyObj ={}
if(Object.keys(emptyObj).length===0){
    //object.keys(...),akes the object in an array and now checking its length 
    console.log("obejct is empty ")
}

// run following three in console 
// false==0;
// false==''
// 0==''