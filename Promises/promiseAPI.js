/*

PROMISE API -- 
.all(promises)
.allSettled(promises)
.race(promises)
.any(promises)
.resolve(value)
.reject(error)

promises - an array of promises
value - value of the resolved promise
error - error value of the rejected promise

*/

let p1 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        reject(100)
    }, 1000)
})

let p2 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        reject(200)
    }, 2000)
})

let p3 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve(300)
    }, 3000)
})



// let allPromise = Promise.all([p1,p2,p3]) 
// let promises = Promise.allSettled([p1,p2,p3]) 
// let promises = Promise.race([p1,p2,p3]) 
let promises = Promise.any([p1,p2,p3]) 

promises
.then(
    (value) => {
        console.log(promises)
        console.log(value)
    }
)
.catch(
    (error) => {
        console.log(promises)
        console.log(error)
    }
)

/*

Promise.all(promises)
for all resolved -> returns a promise with value as an array of the values that were given when the promises were resolved when all the promises are resolved.
for rejected -> first rejected promise is returned with the **FIRST** rejected value of all the promises in the array.

Promise.allSettled(promises)
returns -> Promise with value as an array of objects containing, status and value for each promise

Promise.race(promises)
returns -> The First promise which is either resolved or rejected with corresponding value

Promise.any(promises)
returns -> The first promise which is resolved
if nothing is resolved, then aggregate error

Promise.resolve(value)
returns -> a resolved promise with value 'value'

Promise.reject(error)
returns -> a rejected promise with value 'error'
*/