
import { daysDiff } from './daysDiff'
import { getcoordinates } from './geonamesapi'


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
   
   
   // Calculating trip lenghts and capturing information
    document.getElementById("trip").innerHTML = formText ;
    document.getElementById("nDays").innerHTML = "Days to Trip:" + daystoTrip  + " days";
    document.getElementById("tLength").innerHTML = "Trip Length " + lengthTrip +   " days ";


    lati = getcoordinates(formText)

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
