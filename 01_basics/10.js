let Name="radhika";
let another_name =Name;
console.log("name- "+Name);
console.log("anothername= "+another_name);
another_name="Madhav";
console.log("name after changing another_name- "+Name);
console.log("anothername after changing another_name= "+another_name);

console.log("Non primitive type using heap ");
let userOne={
    email: "user@gmail.com",
    upi:"userpay@gpay",
}
let userTwo=userOne;
console.log("user one email is: "+userOne.email);
console.log("user two email is: "+userTwo.email);

userTwo.email="radhika@gmail.com";
console.log("user one email after changing userTwo is: "+userOne.email);
console.log("user two email  after changing userTwo is: "+userTwo.email);

