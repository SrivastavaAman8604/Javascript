console.log('start')

setTimeout(function cb(){
    console.log("callback")
},5000)

console.log('end')
//output: start,end,callback(after 5 sec)

// if setTimeout is 0  then also it has to wait for call stack to be empty so that it can execute
console.log('start')

setTimeout(function cb(){
    console.log("callback")
},0)

console.log('end')
//output : start,end,callback

//Drawback of setTimeout below line of code will execute for 10 sec till then setTimeout will wait in callback Queue after completing its 5 sec and after 10sec gec(global execution context) will end and call stack is free then event loop will send setTimeout in call stack then it will print callback in console.

// let startDate = new Date().getTime() // will give time in millisecond 
// let endDate = startDate;
// while(endDate <= startDate + 10000){
//     endDate = new Date().getDate();
// }

// console.log("while expire")