### Project details
This project is made as a requirement to complete the Frontend Developer Nanodegree by Udacity. The aim of this application it to take user input of the following and predict the weather:
1. Destination City
2. Date of travel
3. Date of arrival back from the destination

Based on the above input, the application displays the following details:
1. Trip duration in dates
2. Trip duration in days
3. Number of days for the trip to start
4. Weather of destination city like temperature and weather description
5. Destination country details like language used, the currency used and the population.

### API's used
The following API's have been used to generate the required output:
1. Geonames API to fetch the latitude and longitude coordinates from the user input City
2. Weatherbits API to fetch the weather information like temperature and weather description
3. Pixabay API to source a picture to display of the destination country
4. REST Countries API to source details like the country's language, currency and population details.

### Environment Variables
API credentials being senstive information, is stored in .env file and blocked in .gitignore.

## KEY LEARNINGS
# Learning to search
The project was a tough challenge to me being a newbie to programming and it took considerable time to figure out the connecting parts. A critical ability for a developer is to be able to search for solutions online and being able to apply them in the context of one's situation.

# Eye for details
I spent quite a lot of hours troubleshooting "undefined" output of my API credentials. I had committed a mistake of naming my .env file as process.env. A key learning being to focus on even the smallest details especially when self-teaching programming.
