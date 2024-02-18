//try all this in console for knowing difference here u wont find differences 
const marvel=new Array("thor", "ironman", "spiderman");
const dc_heroes=new Array("superman", "slash", "batman");
//  marvel.push(dc_heroes);
// //console.log("using push "+marvel.push(dc_heroes));
console.log("marvel=> "+marvel);
// //to know difference run this code on console;
const Concatenating=marvel.concat(dc_heroes);
console.log("concatenating the arrays using concat method => "+Concatenating);

//using spread operator for concatenation;
const arr1=[12, 23 , 34 ,45];
const newArr=[...marvel, ...dc_heroes, ...arr1];
console.log(newArr);

//using flat 
const arr2=[1, 2, 3, [12, 23, 45, ["ra", "dh", "ika", "end innermost"], 34, "end second innermost"],"ending"];
console.log("arr2 =>"+arr2);
const real_arr2=arr2.flat(Infinity);
console.log("arr 2 after flat=> "+arr2);

console.log(Array.isArray("radhika"));//knowing whether such array exist
console.log(Array.from("radhika"));//creating array from string;
