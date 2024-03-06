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
        title: 'book two', genre : 'non fiction', publish: 1992, edition: 2008
    },
    {
        title: 'book three', genre : 'History', publish: 1999, edition: 2007
    },
    {
        title: 'book four', genre : 'non fiction', publish: 1989, edition: 2010
    },
    {
        title: 'book five', genre : 'Science ', publish: 2009, edition: 2014
    },
    {
        title: 'book six', genre : 'fiction', publish: 1987, edition: 2010
    },
    {
        title: 'book seven', genre : 'History', publish: 1986, edition: 1996
    },
    {
        title: 'book eight', genre : 'Science', publish: 2011, edition: 2016
    },
    {
        title: 'book nine', genre : 'non fiction', publish: 1981, edition: 1989
    },

];

let userBooks = books.filter( (bk)=> bk.genre === 'History')

 userBooks =books.filter( (bk) => { 
    return bk.publish  >=2000 //&& ...ad something 
 })

console.log(userBooks)