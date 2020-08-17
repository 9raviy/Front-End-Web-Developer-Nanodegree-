// require Dotenv and set path to .env
const dotenv = require("dotenv");
dotenv.config();

//require path and express
var path = require('path')
const express = require('express')


// require bodyparser
const bodyParser = require('body-parser');

// create an instance of express
const app = express();

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// require cors and use it
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

// respond to get request
app.get('/', function(req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});


// designates what port the app will listen to for incoming requests
const port = 3000;
app.listen(port, function() {
    console.log(`The express server port is running at ${port}`);
})

module.exports = app;
//Directing various POST calls to declared functions
app.post('/getGeoData', getGeoData);
app.post('/getWeatherInfo', getWeatherInfo);
app.post('/getPixaImage', getPixaImage);
app.post('/getDetails', getDetails);

const fetch = require("node-fetch");

// Get latitude and longitude data from geonames api based on input city
async function getGeoData(req, res) {
    const username = process.env.GEOUSERNAME;
    let url = `http://api.geonames.org/postalCodeSearchJSON?placename=${req.body.city}&maxRows=1&username=${username}`;
    const response = await fetch(url)
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log({ "error": error });
    }
};


// Get weather details like temperature and description from weatherbits api
async function getWeatherInfo(req, res) {
    const apiKey = process.env.WEATHERBITS_API_KEY;
    let apiURL = `https://api.weatherbit.io/v2.0/current?lat=${req.body.latitude}&lon=${req.body.longitude}&key=${apiKey}`;
    const response = await fetch(apiURL)
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};

// Fetch data from Pixabay API using the destination value
async function getPixaImage(req, res) {
    const city = req.body.city.replace(/\s/g, '+');
    const apiKey = process.env.PIXABAY_API_KEY
    let apiURL = `https://pixabay.com/api/?key=${apiKey}&q=${city}&image_type=photo`;
    let response = await fetch(apiURL);
    try {
        let data = await response.json();
        if (data.totalHits > 0) {
            res.send(data);
        } else {
            const country = req.body.country.replace(/\s/g, '+');
            let apiURL = `https://pixabay.com/api/?key=${apiKey}&q=${country}&image_type=photo`;
            let response = await fetch(apiURL);
            try {
                let data = await response.json();
                if (data.totalHits > 0) {
                    res.send(data);
                } else {
                    res.send({ "use_placeholder": true })
                }
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error);
    }
};

// Call details like languages, currencies used and population from REST countries API
async function getDetails(req, res) {
    let apiURL = `https://restcountries.eu/rest/v2/name/${req.body.countryCode}?fullText=true`;
    const response = await fetch(apiURL);
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};