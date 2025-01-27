function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = "your_api_key_here";  // Replace with your OpenWeatherMap API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = data.weather[0];
                const mainInfo = data.main;

                document.getElementById('city-name').textContent = `Weather in ${city}`;
                document.getElementById('temperature').textContent = `Temperature: ${mainInfo.temp}°C`;
                document.getElementById('description').textContent = `Condition: ${weatherInfo.description}`;
                document.getElementById('humidity').textContent = `Humidity: ${mainInfo.humidity}%`;
            } else {
                alert("City not found!");
            }
        })
        .catch(error => {
            alert("Error fetching data. Please try again.");
        });
}
