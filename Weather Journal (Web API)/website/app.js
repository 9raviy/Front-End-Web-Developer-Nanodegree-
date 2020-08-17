/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// API Call Credentials
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '157e3c2675c4ee58ad616008b11f7c27';

document.getElementById('generate').addEventListener('click', performAction);


function performAction(e) {
    const zip_code = document.getElementById('zip').value;
    const resp = document.getElementById('feelings').value;

    getWeather(baseURL, zip_code, apiKey).then(function(data) {
        //console.log(data);
        postData('/addWeather', { temperature: data.main.temp, date: newDate, UserResponse: resp });
    });

    updateUI();

};
const getWeather = async(baseURL, zip_code, key) => {

    const res = await fetch(baseURL + zip_code + ',us&appid=' + key);

    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

// Update UI
const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('temp').innerHTML = 'Current Weather: ' + allData.temperature;
        document.getElementById('date').innerHTML = 'Date: ' + allData.date;
        document.getElementById('content').innerHTML = "How I\'m feeling: " + allData.response;

    } catch (error) {
        console.log("error", error);
    }
}


//Define POST
const postData = async(url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
    }
}

// Async GET
const retrieveData = async(url = '') => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const allData = await request.json()
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};