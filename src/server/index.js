var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const dotenv = require('dotenv');
dotenv.config();



const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch')

const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})



// make API request
app.post('/getAPI', async function(req, res) {
    const text = req.body.text;

    const url = "https://api.meaningcloud.com/sentiment-2.1?key="+ process.env.API_KEY + "&of=json&txt=" + text + "&model=general&lang=en"

    //console.log(`Your process.env.API_Key is ${ process.env.API_KEY}`);
    console.log(`This is the url: ${url}`);

    const data = await fetch(url);
    try {
        res.send(await data.json());
    }
    catch(error) {
        console.log(`Error in server/index.js - API : ${error}`);
    }
})
