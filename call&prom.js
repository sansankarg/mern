//Callback 


/*function formvalid() {
    setTimeout(() => {
        console.log("Hi");
        completed();
    }, 2000);
}

function completed() {
    console.log("Completed");
}
formvalid();
*/



// Promise base example
islocationfound = (loc,time) =>{
    if(loc==="skcet"&&time<=2000) return true
    else return false
}

function  location(){
    time=2000
    loc="Vellore"
    return new Promise((locfound,locNotfound)=>{
        setTimeout(()=>{
            if(islocationfound(loc,time)){
                locfound("Found")
            }
            else{
                locNotfound("Not found")
            }
        },2000);
    })
}
location()
.then((val) => {
    console.log(val);
    
}).catch((val) => {
    console.log(val);
});











