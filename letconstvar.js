console.log(a) //Reference error : Cannot access a before Initialization

let a = 10 // window.a = undefine (in browser console) can also use this instead of window.
var b = 100 // window.b = 100 (in browser console) can also use this instead of window.

// let and const are hoisted but there value is in the temporal dead zone.They store undefine in a seperate space not in global.  
//temporal dead zone. is the time between initializing of let and const and assigning value.

// window or this is global.