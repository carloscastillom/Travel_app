function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    Client.postData('http://localhost:8081/getAPI', {text: formText})
    .then(function(data) {
        document.getElementById('text').innerHTML = "Text: " + formText
        document.getElementById('results').innerHTML = "Subjectivity: " + data.subjectivity
        document.getElementById('polarity').innerHTML = "Polarity: " + data.score_tag

    })
}

export { handleSubmit }
