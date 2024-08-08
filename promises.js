const cart = ["shoes", "pants", "kurta"]

const promise = createOrder(cart) ;

//promise is an empty object.it works asynchronously.
//first it will return value of data undefine {data: undefined}
//later after getting the value it will give value {data: value}
//Promise has 3 state:: Pending,Fulfilled,Rejected.

promise.then(function (orderID){
    proceedToPayment(orderID)
})

//this code will run automatically when we will get the value. it will run our coe just once and it will definetily run.

const GITHUB_API = "https://api.github.com/users/SrivastavaAman8604" 
const user = fetch(GITHUB_API); // Initital value of user is undefine after sometime value is filled with actual value

console.log(user);

// user.then(function(data){
//     console.log(data)
// })

creteOrder(cart)
.then(function (orderId){
    return proceedToPayment(orderId)
})
.then(function (paymentInfo){
    return ShowOrderSummary(paymentInfo)
})
.then(paymentInfo => updateWalletBalance(paymentInfo)
)