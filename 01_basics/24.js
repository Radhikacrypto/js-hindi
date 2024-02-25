(function chai() {
    //named iife hai 
    console.log(`DB connected`);
})();//yaha semicolon bahut imp hai kyuki usse pata hi nhi hai context kaha rukna hai usse 
// do iife likhne ke liye aur imp hai semicolon 

//arrow function using iife
//we are passing values in iife as well 
( (name)=> {
    console.log(`db connected ${name}`);
}) ('radhika ');
