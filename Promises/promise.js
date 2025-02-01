// Promise is a piece of code which will either run or fail, if it fails it's state is called rejected and if it runs succesfully 
// its state is called fulfilled.
// The other state is the pending state which is active only when the code is trying to make itself run succesfully.


// We pass a callback function to promise which is to be executed.
// It provides two functions in the parameter of the callback, resolve and reject,
// used as - 
// resolve(" ANY VALUE OF ANY TYPE ")
// reject(" ANY VALUE OF ANY TYPE ")
// inside the callback


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise1 Fulfilled")
        resolve(100)
    }, 5000)
})

console.log(promise1)

promise1
.then(
    (value) =>{
    console.log(value)
    console.log(promise1)
}, 
    (error)=>{
        console.log(error)
    }
)
.catch((value) => {
    console.log(value)
    console.log(promise1)
})



let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise2 Rejected")
        reject(404)
    }, 10000)
})

promise2
.then(console.log)
.catch((value) => {
    console.log(value)
    console.log(promise2)
})

// THREE METHODS  of promise -- .then() and .catch()
// .then()
// Executes a callback when the promise is fulfilled

// .catch()
// Executes a callback when the promise is rejected

// .finally()
// Executes after the promise is settled - Rejected or resolved

// ** The Callback has a value paramater which stores the value returned by the resolve() or reject lines. **
// ** We can have multiple handlers for one promise running independently **