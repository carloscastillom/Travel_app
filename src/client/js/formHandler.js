
import { daysDiff } from './daysDiff'
import { getcoordinates } from './geonamesapi'
import { getweather } from './weatherapi'
import { getimages } from './imageapi'
import { createTripElem } from './createTripElements'


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let startDate = document.getElementById('checkIn').value
    let endDate = document.getElementById('checkOut').value
    let daystoTrip = daysDiff(startDate)
    let lengthTrip = daysDiff(endDate)-daystoTrip
    let city = ""
    let result = ""
   
   // Calculating trip lenghts and capturing information

    getcoordinates(formText)
    //createTripElem()

    .then(function(data){

        city = data.geonames[0].toponymName + ", "+data.geonames[0].countryCode

        getweather({latitud: data.geonames[0].lat, longitud: data.geonames[0].lng})

        .then(function(data){

            result = "Expect temperatures between: " + data.data[daystoTrip].min_temp + " to "+ data.data[daystoTrip].max_temp + " °C";
            

            getimages(formText)

            .then(function(data){

                //createTrip(tripInfo)
                //class formtext
                //Do a new JS script that adds the css

                document.getElementById("trip").innerHTML = "My trip To: " + city +"<br><br> Departing: " + startDate + "<br><br>";
                document.getElementById("nDays").innerHTML = "Days to Trip: " + daystoTrip  + " days";
                document.getElementById("tLength").innerHTML = "Trip Length: " + lengthTrip +   " days ";
                document.getElementById("searchedImg").src=data.hits[0].webformatURL;
                document.getElementById("Temperature").innerHTML = result

                

            })


        })

        })

    
    console.log("::: Form Submitted :::")

    

}

export { handleSubmit }
