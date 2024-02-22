var a= 20;
let b= 30;
const c=40;
if(true){
    var a=45;
    let b= 34;
    const c= 32;
    // console.log("inner a: "+a);
    // console.log("inner b: "+b);
    // console.log("inner c: "+c);
}
    // console.log("outer a: "+a);//notice that var value was updated to 45 even in outer of scope ..this is becuse scope of var is not defined 

    // console.log("outer b: "+b);
    // console.log("outer c: "+c);

    function one(){
        const username ="radhika";
        function two(){
            const website ="youtube"
            console.log(username);
        }
       //console.log(website);
        two()
    }

    one()

    
    //+++++++++INTERESTING+++++++++
    //type 1 to declare a function 
    //support hoisting
    addDone(5)
    function addDone(num){

    }
    //type 2 for declaring 
    // doesnt support hoisting 
    // addTwo(5)..will be a wrong command
    
    const addTwo= function(num){
        return num+2
    }
    addTwo(5)