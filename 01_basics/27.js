// loops is also called as iterators 
//for

for(let index =1; index<=10;index++){
    if(index==5){
        console.log("5 is best ");
    }
    console.log(index);
}

let myArray =["ram", "sita", "lakshman", "bharat", "mandavi"];
for(let i= 0; i<myArray.length; i++){
    const elemnt =myArray[i];
    console.log(elemnt);
}

//break and continue
// break--> comes out of the loop
//continuw -->skips the iteraton 

for(let i =1; i<=20; i++){
    if(i==5){
        console.log(`detected 5`);
        // break;
        continue;
    }
    console.log(`the value of i is ${i}`);
}
