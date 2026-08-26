// function sendmail(callback) {
//     setTimeout(() => {
//         console.log("done");
//     }, 2000);
// }

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = false;
//         if (success) {
//             resolve("task completed")
//         }
//         else {
//             reject("task rejected")
//         }
//         resolve("Task completed");
//     }, 3000);
// })
// promise.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log("error");
// })

function placeorder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("order placed");
            // processpayment();
        }, 2000);
    })
}
function processpayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment done!");
            // inventoryupdate();
        }, 2000);
    })
}
function inventoryupdate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("inventory updated!");
            // sendmail();
        }, 2000);
    })
}
function sendmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("email sent!");
        }, 2000);
    })
}
placeorder().then(result => {
    console.log(result);
    return processpayment();
}).then(result => {
    console.log(result);
    return inventoryupdate();
}).then(result => {
    console.log(result);
    return sendmail();
}).catch(error => {
    console.log("error");
})
