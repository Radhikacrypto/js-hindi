const coding=["js", "ruby", "cpp", "java", "py"]
const value = coding.forEach( (item) => {
    return item;
})


console.log(value);// output is undefined as for each never returns a value
const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const newNums=myNums.filter( (num) => num > 4)// filter aapko value return karta hai ..for each bhi yeh kaam kar sakta hai hai ... per return nhi karta hai ..woh bus store karlega 
console.log(newNums)// yeh for each ke saath kar sakte the per woh values return nhi karta hai 

// using for each 
const newnums =[];
myNums.forEach( (num) => {
    if(num> 4){
        newnums.push(num)
    }
})

console.log(newnums)

const books =[
    {
        title: 'book one',
        genre: 'fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'book two',
         genre : 'non fiction', 
         publish: 1992,
          edition: 2008
    },
    {
        title: 'book three',
         genre : 'History',
          publish: 1999, 
          edition: 2007
    },
    {
        title: 'book four',
         genre : 'non fiction',
        publish: 1989,
         edition: 2010
    },
    {
        title: 'book five',
         genre : 'Science ',
          publish: 2009, 
          edition: 2014
    },
    {
        title: 'book six', 
        genre : 'fiction', 
        publish: 1987, 
        edition: 2010
    },
    {
        title: 'book seven', 
        genre : 'History', 
        publish: 1986, 
        edition: 1996
    },
    {
        title: 'book eight', 
        genre : 'Science', 
        publish: 2011, 
        edition: 2016
    },
    {
        title: 'book nine', 
        genre : 'non fiction', 
        publish: 1981, 
        edition: 1989
    },

];

let userBooks = books.filter( (bk)=> bk.genre === 'History')

 userBooks =books.filter( (bk) => { 
    return bk.publish  >=2000 //&& ...ad something 
    //yaha scope open hua hai isliye return keyword use kiya humne 
 })

console.log(userBooks)
const myNumbers =[11, 12, 13, 14,15, 16, 17 ,18, 19,20]
let NewNums=myNumbers.map((num)=> num+10)
console.log(NewNums);
//using for each to do same task done before using map 
//myNumbers.forEach((item)=>console.log(item+10))
NewNums=myNumbers
               .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40);

console.log(NewNums);

const MyNums=[1,2,3]

let MyTotal=MyNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval;
},3)
console.log("printing mytotal",MyTotal);
//output==> acc 3 currval 1 now 3+1=6 so acc=4 and currval =2
//now 4+2=6 so acc= 6 and currval =3


//REDUCE USING ARROW FUNCTION
console.log("using arrow function")
MyTotal=MyNums.reduce((acc, curr)=>acc+curr,0)
console.log(MyTotal);

const shoppingcart=[
    {
        itemName: "js course",
        itemPrice: 2999
    },
    {
        itemName: "py course",
        itemPrice: 999
    },
    {
        itemName: "mobile dev course",
        itemPrice: 5999
    },
    {
        itemName: "data scientist course",
        itemPrice: 12999
    }
]
const priceToPay=shoppingcart.reduce((acc,item)=>acc+item.itemPrice,0)
console.log(priceToPay);

