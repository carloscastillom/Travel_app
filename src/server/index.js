
// https://github.com/carloscastillom/Web-Development/blob/main/7.WeatherApp/website/app.js

// https://github.com/carloscastillom/Web-Development/blob/main/7.WeatherApp/server.js



/* Empty JS object to act as endpoint for all routes */
projectData = {};

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
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


app.get('/all', sendData);

function sendData (req, res) {
  res.send(projectData);
};



/*
// make API request
app.post('/getAPI', async function(req, res) {
    const text = req.body.text;
    //const url = "https://api.meaningcloud.com/sentiment-2.1?key="+ process.env.API_KEY + "&of=json&txt=" + text + "&model=general&lang=en"
    const url = "http://api.geonames.org/searchJSON?q=london&maxRows=10&username=carloscastilloml"
    //console.log(`Your process.env.API_Key is ${ process.env.API_KEY}`); test
    console.log(`This is the url: ${url}`);
    const data = await fetch(url);
    try {
        res.send(await data.json());
    }
    catch(error) {
        console.log(`Error in server/index.js - API : ${error}`);
    }

})

/*


/*
// make API request
app.post('/getAPI', async function(req, res) {
    const text = req.body.text;
    //const url = "https://api.meaningcloud.com/sentiment-2.1?key="+ process.env.API_KEY + "&of=json&txt=" + text + "&model=general&lang=en"
    const url = "http://api.geonames.org/searchJSON?q=london&maxRows=10&username=carloscastilloml"
    //console.log(`Your process.env.API_Key is ${ process.env.API_KEY}`); test
    console.log(`This is the url: ${url}`);
    const data = await fetch(url);
    try {
        res.send(await data.json());
    }
    catch(error) {
        console.log(`Error in server/index.js - API : ${error}`);
    }
})




app.post('/getAPI2', async function(req, res) {
    const text = req.body.text;
    //const url = "https://api.meaningcloud.com/sentiment-2.1?key="+ process.env.API_KEY + "&of=json&txt=" + text + "&model=general&lang=en"
    const url = "https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=4fbf33d8795c485aa7d4e0484f7e6102"
    //console.log(`Your process.env.API_Key is ${ process.env.API_KEY}`); test
    console.log(`This is the url: ${url}`);
    const data2 = await fetch(url);
    try {
        res.send(await data2.json());
    }
    catch(error) {
        console.log(`Error in server/index.js - API : ${error}`);
    }
})
*/





// key api 4fbf33d8795c485aa7d4e0484f7e6102 https://www.weatherbit.io/account/dashboard
// https://www.weatherbit.io/
// Forecast https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=4fbf33d8795c485aa7d4e0484f7e6102
// Historic https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&country=US&start_date=2022-07-09&end_date=2022-07-10&key=4fbf33d8795c485aa7d4e0484f7e6102


// https://pixabay.com/api/?key=28629495-48d923be44e03bd5a1f0c6f36&q=london&image_type=photo&pretty=true
