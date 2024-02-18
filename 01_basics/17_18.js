//using constructor
//const tinderuser=new Object();//yeh ek singleton user hai 
const tinderuser={};
tinderuser.id="123abc";
tinderuser.name="sammy";
tinderuser.isloggedin=false;
const realuser={
    email: "radhika@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Radhika",
            lastname: "Bacharwar"
        }
    },
    roll_no: 137
}

//console.log(realuser.fullname.userfullname.firstname);//accessing objects within objects
//combining objects
const obj1={
    1: "a",
    2: "b"
}
const obj2={
    3: "c",
    4: "d"
}
const obj4={
    5: "e",
    6: "f"
}
let obj3={obj1, obj2};//not a good way to combine objects 
//console.log("printing without using object.assign=> "+obj3);
const obj5=Object.assign({}, obj1, obj2, obj4);//notice difference in both 
//console.log("using object.assign => "+obj5);

// we can also use spread operator 
obj3={...obj1, ...obj2};
//console.log("using spread operaton on obj3=> "+obj3);
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));//iska data type ek arr hai toh access karne ke liye loop bhi laga sakte hai 
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggedin'));


//destructuring 
const course={
    coursename: "js hindi",
    price: "999",
    courseinstructor: "hitesh"
}
const{courseinstructor}=course;
console.log(coursename);

/*
{
    "name"="radhika",
    "course"= "btech",
    "price"="999"
}
*/
[
    {},
    {},
    {}
]

