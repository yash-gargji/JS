const user = []

if(user){
     console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//empty array will be true

/* falsy values
 false , 0 ,-0,BigInt 0n , "" , null, undefined, NaN

 all the other values are true

 truthy values
  "0" , 'false' , [] , " ", {}, function(){}

  */

  const emptyObj = {}

  if(Object.keys(emptyObj).length === 0){
      console.log("Object is empty")
  }

