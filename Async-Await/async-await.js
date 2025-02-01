let test = async () => {
    let data1 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data 1 Served.")
        }, 2000)
    })
    console.log(data1)

    let data2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data 2 Served.")
        }, 3000)
    })
    console.log(data2)
}

test()

// ASYNC FUNCTION
// -- Always returns a promise
// -- await can only be used in async functions
// -- await should be used only with the values returning promises because otherwise it would be insignificant
// -- await assigns the resolved value to the variable and not the promise itself.
// -- without await the promise would've been assigned to data1 and data 2
// -- test is returning a promise with value undefined