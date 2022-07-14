function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    Client.postData('http://localhost:8082/getAPI', {text: formText})
    .then(function(data) {

        console.log(formText)
        console.log(data.geonames[0])
        console.log(data.geonames[0].name)
        console.log(data.geonames[0].countryName)
        console.log(data.geonames[0].countryCode)
        console.log(data.geonames[0].lat)
        console.log(data.geonames[0].lng)
        console.log("change7")

        formText = data.geonames[0].lat 

        Client.postData('http://localhost:8082/getAPI2', {text: formText})
        .then(function(data2) {
            console.log(formText)
            console.log(data2)
        })
        /*

        document.getElementById('text').innerHTML = "Text: " + formText
        document.getElementById('results').innerHTML = "Subjectivity: " + data.subjectivity
        document.getElementById('polarity').innerHTML = "Polarity: " + data.score_tag
        */
    })
}

export { handleSubmit }
