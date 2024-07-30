// Function Statement (aka Function Declaration)
function a(){
    console.log("a called")
}
a()

// Function Expression
var b = function(){
    console.log("b called")
}
b()

//Note: Difference between Function Statement & Function Expression is hoisting.if we call it above in starting b will give typeerror (b is not a function).

// Anonymous Function
    // function (){}

// Named Function Expression
var c = function xyz(){
    console.log("c called")
}
c()
// xyz() -> Reference Error : xyz is not define because it has local scope .we can call it inside function.

// Difference between Parameters & Arguments ?
var  d = function(Parameters){
    console.log('d')
}
d(arguments)

// First Class Function(First class citizens) : the  ability to use functions as value and can be passed as a argument of another function and  can be returned as a function.
    //for example::
        var e = function(param1){
            // console.log(param1)
            return function xyz(){

            }
        }

        // e(function(){})
        console.log(e());

