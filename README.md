# Weather App

Weather App is a web application that provides current weather information for a given location. Users can search for weather information for a specific location by city name or zip code, and the app displays the current weather conditions including temperature, humidity, wind speed, and weather description.

## Features

- Search for weather information by city name or zip code
- Display current weather conditions including temperature, humidity, wind speed, and weather description
- Display weather icons to represent weather conditions
- Responsive design for optimal viewing on different devices
- Background images are fetched from <a href="https://source.unsplash.com">Unsplash</a> and is changed according to the City name.

## Technologies Used

- HTML5, CSS3, JavaScript for front-end development
- OpenWeatherMap API for fetching weather data
- Vanilla tilt.js library
 


### Prerequisites

- Node.js and npm installed on your local machine

### Installation

1. Clone the repository to your local machine:
git clone https://github.com/anchitgupta01/weather-app.git

2. Change to the project directory:
cd weather-app

3. Install the dependencies:
npm install

### Usage

1. Obtain an API key from OpenWeatherMap API by signing up for a free account at https://openweathermap.org/. 
2. Create a `.env` file in the project root directory and add your API key as follows:
API_KEY=YOUR_API_KEY

Replace `YOUR_API_KEY` with your actual API key from OpenWeatherMap API.

3. Start the development server:
npm run start

4. Open a web browser and go to `http://localhost:3000` to view the weather app.

### Credits

- Weather data is fetched from OpenWeatherMap API (https://openweathermap.org/)

### Contributing

If you would like to contribute to the Weather App, feel free to submit a pull request or open an issue with suggestions or bug reports.

