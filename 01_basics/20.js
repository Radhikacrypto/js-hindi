function calculateCartPrice(...num1){
    //rest operator ki wajah se array ban raha hai parametre ka or mai jitne chahu utne objects pass kar sakti hu 
   return num1;
}

console.log(calculateCartPrice(200, 400, 500));
const user ={
    username: "radhika",
    price: 199
}
function handleObject(anyobject)//yaha hum user nhi likhte hai taaki koi bhi object pass kar sake
{
    console.log(`username is ${anyobject.username}`);
    console.log(`price is ${anyobject.price}`);
}

handleObject(user);

//another way hum objects ko andar bhi define kar sakte hai 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray =[200, 300, 400, 500, 600];

function retunsecondValue(getArray){
    return getArray[1];
}
console.log(retunsecondValue(myNewArray));

console.log("running another method "+retunsecondValue([500, 4000, 4768]));

