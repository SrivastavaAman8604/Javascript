setTimeout(function(){
    console.log("timer")
},5000)
function x(y){
    console.log("x")
    y()
} 

x(function y(){ console.log("y")})    //function y is callback

// Event Listener
// document.getElementById('clickme')
//     .addEventListener("click",function xyz(){
//         console.log("button is clicked")
//     }
// )

// Closure with Event Listener
function attachEventListener(){
    let count = 0
    document.getElementById('clickme')
        .addEventListener("click",function xyz(){
            console.log("button is clicked", ++count)
        }
    )
}

attachEventListener()