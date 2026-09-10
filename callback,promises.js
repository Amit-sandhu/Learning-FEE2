function placeOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Order placed")
        }, 2000);
    })
}

function processPayment(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Payment processed")
        }, 2000);
    })
}

function inventryUpdate(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Updated inventry")
        }, 2000);
    })
}

function sendEmail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Email sent")
        }, 2000);
    })
}

placeOrder().then(result=>{
    console.log(result);
    return processPayment();
}).then(result=>{
    console.log(result);
    return inventryUpdate();
}).then(result=>{
    console.log(result);
    return sendEmail();
}).then(result=>{
    console.log(result);
})