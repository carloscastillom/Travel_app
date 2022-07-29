
const getimages = async function(txt='') {

    const url = "https://pixabay.com/api/?key=28629495-48d923be44e03bd5a1f0c6f36&q="+txt
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

export { getimages }