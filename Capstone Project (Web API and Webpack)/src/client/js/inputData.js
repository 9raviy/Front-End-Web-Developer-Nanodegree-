const moment = require('moment');

export function inputData() {
    // Select the City entered
    const city = document.getElementById('city').value;

    // Select the departure and arrival dates
    const departureDate = document.getElementById('departure_date').value
    const departure = moment(departureDate).format('LL');
    const arrivalDate = document.getElementById('arrival_date').value;
    const arrival = moment(arrivalDate).format('LL');

    // Calculate the days for trip to start and the duration of the trip in no. of days
    const newDepartureDate = new Date(departure);
    const newReturnDate = new Date(arrival);
    const presentDate = new Date();
    const daysToTrip = Math.round((newDepartureDate.getTime() - presentDate.getTime()) / (1000 * 3600 * 24));
    const tripDuration = (newReturnDate.getTime() - newDepartureDate.getTime()) / (1000 * 3600 * 24);

    // Return all the processed data
    return {
        city: city,
        departure_date: departure,
        arrival_date: arrival,
        trip_duration: tripDuration,
        days_to_trip: daysToTrip
    }

}