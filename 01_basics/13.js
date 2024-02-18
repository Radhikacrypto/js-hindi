let mydate= new Date();//humne yeh object use kiya hai au ruska instance cretate use kiya hai so tyoe of date object
console.log("normal date "+mydate);
console.log("using string method=> "+mydate.toString());
console.log ("to date string => "+mydate.toDateString());
console.log("using local string=> "+mydate.toLocaleString());
console.log("using to local date string=> "+mydate.toLocaleDateString());

let myCreateDate =new Date(2023, 0, 23);//here 0 represents january coz moths start with o in js
console.log ("to date string => "+myCreateDate.toDateString());
myCreateDate= new Date(2023, 0, 23, 5, 3);//another way of declaring date and time 
console.log("using local string=> "+myCreateDate.toLocaleString());
myCreateDate= new Date("2023-01-14");//third way 
//we can also write as("01-14-2023")=mm-dd-yyyy
console.log("using local string=> "+myCreateDate.toLocaleString());

//Time stamp

let myTimeStamp=Date.now();//abhi ki date in miliseconds

console.log(myTimeStamp);
console.log(myCreateDate.getDate());
console.log(mydate.getTime());//similarly we can get day , date , year , milisecond and anthing using get....method 

console.log(Math.floor(Date.now()/1000));
let newDate=new Date();
console.log(newDate.getMonth()+1);

 let dt=newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(dt);

