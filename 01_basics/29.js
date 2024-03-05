// for of loop

// ["", "", ""];//araay of strings
// [{}, {}, {}, ]//array of objects 
 
const arr =[1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
const greetings ="hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}


//maps

const map =new Map();
map.set('IN', "India");
map.set('USA', "United states of Americs");
map.set('Fr', "France");
map.set('IN', "India");// maps takes only unique value so map will ignore it 

console.log(map);
for (const [key, value] of map) {
    console.log(key);
}

const myObj={
    //two ways of writing ..although both will throw error
    game1: 'NFS',//'game': 'NFS'
    game2: 'spiderman'//'game2': 'spiderman'
}
//this will throw error as this will not iterate objects ..objects are not iterable ..there are different methods of doing so 

// for(const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }

const myobj={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"

}

for (const key in myobj) {
   console.log(`${key} shortcut is for ${myobj[key]}`);
}

const programming=["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);//output is coming so coz ...array default keys is 0, 1 , 2,...
    console.log(programming[key]);//notice the difference 
}

const coding=["js", "ruby", "cpp", "java", "py"]

coding.forEach( function (item) {
    console.log(item);
} )
 
//using arrow functiom 
coding.forEach( (item) => {
    console.log("using arrow function",item);
})

//another method

function printMe(item) {
    console.log("printing using printme user made function", item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
 console.log(item , index, arr);//in sabh cheezo ko acces hota hai for each ke pass isliye most used hai 
})
// ek array ke andar bahut sarre objects hai 
const mc =[
   {//yeh objects hai 
    languagename: "javascript",
    languageFilename: "js"
   },

   {
    languagename: "c++",
    languageFilename: "cpp"
   },

   {
    languagename: "java",
    languageFilename: "java"
   },

   {
    languagename: "python",
    languageFilename: "py"
   }
]

mc.forEach( (item) => {
    console.log(item.languagename);
})