
const getweather = async function(weatherData={}) {

  console.log(weatherData.latitud)
  console.log(weatherData.longitud)

    const url = "https://api.weatherbit.io/v2.0/forecast/daily?lat=38.123&lon=-78.543&key=4fbf33d8795c485aa7d4e0484f7e6102"
    console.log(`This is the url: ${url}`);
    const res = await fetch(url);
    try {
   
        const data = await res.json();
        console.log(data)
        return data;
        // 1. We can do something with our returned data here-- like chain promises!
   
        // 2. 
        //postData('/animal', data)
      }  catch(error) {
        // appropriately handle the error
        console.log("error", error);
      }



    }

export { getweather }


