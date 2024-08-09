const cart = ["shoes", "pant", "kurta"]

createOrder(cart)//orderId
.then(function (orderID){
    console.log(orderID)
    return orderID
})
.catch(function(err){
    console.log(err.message);
})
.then(function(orderID){
    return proceedToPayment(orderID)
    
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message);
})


//Producer End
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //createOrder
        //validateCart
        //OrderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err);
        }
        //logic for createOrder
        const orderId = "1234567"
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)
            // resolve(orderId)
           
        }
    });
    return pr
}

function proceedToPayment(orderID){
    return new Promise(function(resolve,reject){
        resolve("Payment sucessful");
        
    })
}

function validateCart(cart){
    return false
}