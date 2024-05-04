console.log("i m a hacker");
setTimeout(() => {
    console.log("i am in set timeout block ")
}, 2000);
setTimeout(() => {
    console.log("i am in set timeout with 0 sec")//although the timing is zero still the code is running after the end sentence ..this shows async behaviour of js
}, 0);
console.log("i m in the end");