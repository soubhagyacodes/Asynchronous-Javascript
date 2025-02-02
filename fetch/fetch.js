let getdata = async () => {
    const response = await fetch("https://dummyjson.com/products/20", {
        method: "PUT",
        headers: {
            type: "application/json"
        },
        body: {
            
        },
    });
    const data = await response.json()
    console.log(data)
}

getdata()