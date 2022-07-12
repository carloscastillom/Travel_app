function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    //if (Client.checkForName(formText)) {

        console.log("::: Form Submitted :::")
        Client.postData('http://localhost:8081/getAPI', {text: formText})
        .then(function(data) {

            console.log(data)


            //document.getElementById('text').innerHTML = "City: " + formText
            //document.getElementById('countryName').innerHTML = "totalRes: " 
            //document.getElementById('Latitud').innerHTML = "Latitudsss: " + data.totalResultsCount
            //document.getElementById('Longitude').innerHTML = "Longitude: " + data.lng



    
        })
    
    /*
    }
    else {
        alert("Please add a valid URL")
    }

    */

}

export { handleSubmit }
