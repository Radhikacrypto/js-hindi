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

//25
// to know call stack run the following code in sources by making the snippets and put breakpints 
function one(){
    console.log("hello , in function 1");
   // two();
}

function two(){
    console.log("hey . in function two ");
    //three();
}

function three(){
    console.log("hii, in function 3");
}
//first run code which is comment out then , then with the things which is comment out
//put breakpoints in tfunction one, two and three and see call stack 