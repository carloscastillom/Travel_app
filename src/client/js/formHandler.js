
import { daysDiff } from './daysDiff'
import { getcoordinates } from './geonamesapi'
import { getweather } from './weatherapi'
import { getimages } from './imageapi'


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let startDate = document.getElementById('checkIn').value
    let endDate = document.getElementById('checkOut').value
    let daystoTrip = daysDiff(startDate)
    let lengthTrip = daysDiff(endDate)-daystoTrip
    let lati = ""
    let longi = ""
    let result = ""
   
   // Calculating trip lenghts and capturing information
    document.getElementById("trip").innerHTML = formText ;
    document.getElementById("nDays").innerHTML = "Days to Trip:" + daystoTrip  + " days";
    document.getElementById("tLength").innerHTML = "Trip Length " + lengthTrip +   " days ";

    getcoordinates(formText)

    .then(function(data){

        console.log(data.geonames[0].lat)

        lati = data.geonames[0].lat
        longi = data.geonames[0].lng

        getweather({latitud: lati, longitud: longi})

        .then(function(data){
            console.log(data.data[daystoTrip].max_temp)
            console.log(data.data[daystoTrip].min_temp)

            document.getElementById("Temperature").innerHTML = "Temperature Between: " + data.data[daystoTrip].min_temp + " to "+ data.data[daystoTrip].max_temp + " °C";

            getimages(formText)

            .then(function(data){
                console.log(data.hits[0].webformatURL)
                document.getElementById("searchedImg").src=data.hits[0].webformatURL;

            })

            //.then(function(data){

             //   console.log(data)
              //  })

                            

            // to update the link
            
            //img document.getElementById("searchedImg")



            // api for london iamges https://pixabay.com/api/?key=28629495-48d923be44e03bd5a1f0c6f36&q=london
            // "webformatURL":"https://pixabay.com/get/g1371dfc17ca6cc295d51f1f07fe0dc4313c4236bf3d2b59da54fb7132f1252160c2ca5990869215ae7924ee12b1ebd941731c3c580023b64f7d8b7a21ea9e303_640.jpg"
        })


        /*
        datanew={
          temperature: data.temperature, 
          evalDate: newDate,
          user_res: feel
        }
      
      
        postData('/animal',datanew)  
        //get the all data Request old data
      
        //postGet(datanew)
        console.log(datanew);
        return datanew;
        */
        })


    console.log(lati)
    //console.log(lati.geonames[0].countryName)
    console.log("::: Form Submitted :::")

    
    /*
    
    Client.postData('http://localhost:8080/getAPI', {text: formText})
    .then(function(data) {

        console.log(formText)
        console.log(data.geonames[0].name)
        console.log(data.geonames[0].countryName)
        console.log(data.geonames[0].countryCode)
        console.log(data.geonames[0].lat)
        console.log(data.geonames[0].lng)
        console.log("change10")

        lati = data.geonames[0].lat 
        longi = data.geonames[0].lng 


        
        Client.postData('http://localhost:8082/getAPI2', {latitud: lati, longitud: longi})
        .then(function(data2) {
            console.log("test")
            console.log(lati)
            console.log(longi)
   


        })
        
    })
    */
}

export { handleSubmit }
