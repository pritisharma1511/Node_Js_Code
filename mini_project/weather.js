import readline from 'readline/promises';

//openWeatherMap Api Details
const API_KEY = '27cfc8d0c48df5f08069ec450b5cff7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const getWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('city not found .Please check the city name.')
        }
        const weatherData = await response.json();
        console.log(weatherData)

        console.log('\n Weather information:');
        console.log(`City : ${weatherData.name}`);
        console.log(`temperature: ${weatherData.main.temp}'C`);
        console.log(`Description: ${weatherData.weathe[0].description}`);
        console.log(`Humidity : ${weatherData.main.humidity}%`);
        console.log(`wind speed: ${weatherData.wind.speed} m/s\n`);

    }catch (error) {
        console.log(error);
    }
}

const city = await rl.question('enter a city name to get its weather :');
await getWeather(city);
rl.close()
