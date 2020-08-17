import { inputData } from './inputData';

export const capital = (word) => {
    if (typeof word !== 'string') return '';
    return word[0].toUpperCase() + word.slice(1);
}

export const updateUI = function(trip) {
    const resultSection = document.getElementById('result');

    let tripDetails = document.createElement('div');
    tripDetails.setAttribute('id', 'final');
    tripDetails.innerHTML = ` <img src="${trip.imageUrl}" alt=${trip.city}>
                <div class="margin">
                <h3 class="h1">Weather information and details about your destination below</h3>
                <p>Trip duration: ${trip.departure_date} to ${trip.arrival_date}</p>
                <p>Length of trip: ${trip.trip_duration} day(s)</p>
                <p>Number of days till trip: ${trip.days_to_trip} day(s)</p>
                <h3 class="final">Weather</h3>
                <p>Temperature: ${trip.temperature}°C</p>
                <p>Details: ${capital(trip.weather)}</p>
                <h3 class="final">Destination Country details</h3>
                <p>Country: ${capital(trip.countryName)}</p>
                <p>Primary language: ${trip.languages}</p>
                <p>Currency: ${trip.currencyName}</p>
                <p>Population: ${trip.population}</p>
                </div> `;

    console.log(tripDetails);
    resultSection.appendChild(tripDetails);

}