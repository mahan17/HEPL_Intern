function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value.trim();
    const weatherInfo = document.getElementById('weatherInfo');

    if (city === "") {
        weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const apiKey = 'ca619117c1af6f41b570d26672aa806e';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document
    .getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);