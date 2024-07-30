// no arguments and no return type
var fn = () =>{
    s=18
    if(s<18){
      console.log("You are a minor");
  }
  else{
        console.log("you are a major");

    }
}
fn();

// argument and return type

var pop = (s) =>{
    
    if(s<18){
      return true;
  }
  else{
       return false;

    }
}
console.log(pop(18));

// no argument and return type

var fn = () =>{
      s=18
      if(s<18){
        return true;
    }
    else{
          return false;

      }
}
console.log(fn());

// argument and return type

var fn = (s) =>{
    
    if(s<18){
      console.log("you are a minor");
  }
  else{
        console.log("you are a major");

    }
}
fn(18);