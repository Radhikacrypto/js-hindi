const arr=[1, 2, "radhika", true];
const myheroes=["shaktiman","batman","ironman"];
const arr2=new Array(1, 2, 3, 4, 5)
console.log(arr2);
arr2.push(6);
console.log(arr2);

arr2.push(7);//adds something at the end of array 
console.log(arr2);

arr2.pop();//removes the last element
console.log(arr2);

arr2.unshift(0);//adds something at the start of an array
console.log(arr2);

arr2.unshift(9);
console.log(arr2);
arr2.shift();//remove starting elemnet 
console.log(arr2);
console.log("array contain 9 or not "+arr2.includes(9));
console.log("the index of 9 is: "+arr2.indexOf(9));
console.log("the index of 3 is: "+arr2.indexOf(3));

const newArr= arr2.join();//binds and change the array type to string 
console.log("array is : "+arr2);
console.log("checking the type of newArr 0 arr2.join=> "+typeof newArr);

//slice, splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits=> "+fruits);
console.log("slicing(1,3) => "+fruits.slice(1, 3));//defines range for printing and does not change the real array 
console.log("fruits=> "+fruits);

console.log("splice for adding 2 elemnets at 2nd position and removing zero elements=> "+fruits.splice(2, 0, "Lemon", "Kiwi"));//this statement change the 
console.log("fruits=> "+fruits);
console.log("splice to remove 2 items from position 2=> "+fruits.splice(2, 2));//as output gives the elemnts which are removed 
console.log("fruits=> "+fruits);
//spice makes changes in real array 