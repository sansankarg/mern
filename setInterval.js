// 1. SET TIMEOUT
console.log("timeout");

setTimeout(function(){
    console.log("end");
},1000);



//  2.SET INTERVAL
console.log("TimeInterval");

setInterval(function(){
    console.log("end")
},2000)


setInterval(() =>{
    console.log("setinterval");

},2000);


// 3. SELF CALLING FUNCTION

(function name(){
    console.log("heL0");
})()
