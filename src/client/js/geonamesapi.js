const getcoordinates = async (txt)=>{
    // 1.

    const url = "http://api.geonames.org/searchJSON?q="+txt+"&maxRows=10&username=carloscastilloml"
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

export { getcoordinates }