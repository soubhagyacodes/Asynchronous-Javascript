let getdata = async () => {
    const response = await fetch("http://api.weatherapi.com/v1/forecast.json");
    console.log(await response.json())
}

getdata()