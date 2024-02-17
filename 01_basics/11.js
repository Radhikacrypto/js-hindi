const name="radhika";
const repoCount=50;

//console.log(name+ repoCount+ " values");......not a good practice to write code

//string Interpolaton
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('Radhika');//new way to define variables
//here we are using object string and passing value radhika to its constructor 
console.log(gameName);
console.log("the key value pair of d is "+gameName[2]);
console.log("prototype is "+gameName.__proto__);
console.log("the length is :"+gameName.length);
console.log("the uppercase is :"+gameName.toUpperCase);
console.log("the character at 2 is: "+gameName.charAt(2));
console.log("the index of h in radhika is : "+gameName.indexOf('h'));

const newString=gameName.substring(0, 4);//for slicing
console.log("new string is : "+newString);
const anotherString = gameName.slice(-8, 4);//in slice we can read reverse as well, using negative value 

console.log("using slicing "+anotherString);

const Str1="    radhika     ";
console.log(Str1);
console.log("after trim "+Str1.trim());

const url= "https://radhika.com/radhika%20Bacharwar";//actually here instead of %20 there was space which is converted to url coding..we do not pc to do that so we are going to use replace

console.log(url.replace('%20', '-'));

console.log("whether string include radhika "+url.includes('radhika'));
console.log("whether string includes madhav or not "+url.includes('madhav'));

const str2="radhika-20-03-2003-engineering";

console.log("spliting based on '-': "+str2.split('-'));


