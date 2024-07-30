//async with await
// async function a()
// {
//     await b()
//   setTimeout(() =>  {
 
//     console.log("Hi")
// },777);
// }
//  async function b()
// {
//     await c()
//     setTimeout(() =>  {
 
//         console.log("Vanakam")
//     },777);
// }
// async function c()
// {
//   console.log("Namaste");  
// }
// a();

// with promise

let reach=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
        setTimeout(resolve,3000,"ended")
    else
     reject("break")
})

async function asyncstatus(){
    try{
    console.log("wait");

    res=await reach
    console.log(res);
    console.log("");
    }
    catch(err){
        console.log(err);
    }
}
asyncstatus()
