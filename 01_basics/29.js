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