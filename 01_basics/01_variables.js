const accountId = 144553
let accountEmail  = "hitesh@goggle.com"
var accountPassword  = "12345"
 // in var there is a problem of scope
accountCity = "Jaipur"
// this is not a good practice 
let accountState;

// accountId = 2 // not allowed 
/* 
Prefer not to use var beacuse os issue in block scope and fucntuonal scope
*/

accountEmail = "hcdhasc"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])