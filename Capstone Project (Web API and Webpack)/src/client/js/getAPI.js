import { handleSubmit } from './formHandler';
import { inputData } from "./inputData";


// Fetching details from the server
export async function getAPI(trip) {

    console.log("inside getAPI");
    //Getting coordinates from geonames api
    let coordinates = await fetch("http://localhost:3000/getGeoData", {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "city": trip.city })
    })
    try {
        let data = await coordinates.json();
        trip.destinationCode = data.postalCodes[0].countryCode;
        trip.longitude = data.postalCodes[0].lng;
        trip.latitude = data.postalCodes[0].lat;
        trip.countryName = data.postalCodes[0].countryCode;
        console.log(trip.longitude);
    } catch (error) {
        console.log(error);
    }


    // Geting temperature and description based on latitude and longitude from Weatherbits API
    let weatherData = await fetch("http://localhost:3000/getWeatherInfo", {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'longitude': trip.longitude,
            'latitude': trip.latitude
        })
    })
    try {
        let data = await weatherData.json();
        trip.temperature = data.data[0].temp;
        trip.weather = data.data[0].weather.description;


    } catch (error) {
        console.log(error);
    }

    // Geting image of destination from pixabay
    let image = await fetch("http://localhost:3000/getPixaImage", {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'city': trip.city,
            'country': trip.countryName
        })
    })
    try {
        let data = await image.json();
        console.log("inside pixabay getapi");
        if (data.use_placeholder) {
            trip.imageUrl = '../media/placeholder.jpg';
            console.log(trip.imageUrl);
        } else {
            trip.imageUrl = data.hits[0].largeImageURL;

        }
    } catch (error) {
        console.log(error);
    }

    // Get languages, population and currencies used details
    let details = await fetch("http://localhost:3000/getDetails", {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'countryCode': trip.destinationCode
        })
    })
    try {
        let data = await details.json();
        trip.languages = data[0].languages[0].name;
        trip.population = data[0].population;
        trip.currencyName = data[0].currencies[0].name;

    } catch (error) {
        console.log(error);
    }

    return trip;
}