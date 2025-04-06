document.addEventListener('DOMContentLoaded', function() {
    const cityName = localStorage.getItem('cityName'); // Get city name from localStorage
    if (cityName) {
        // Call the weather function with the stored city
        getWeather(cityName);
    } else {
        alert('No city name found. Please go back to the Home page and enter a city name.');
    }
});

function getWeather(cityValue) {
    const show = document.getElementById("show");
    const key = "c3afce02ec5a996499ed9573221f677e";

    if (!cityValue) {
        show.innerHTML = `<h3 class="error">City not found</h3>`;
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Check if city was found
            if (data.cod === '404') {
                show.innerHTML = `<h3 class="error">City not found</h3>`;
                return;
            }

            // Populate the weather data
            show.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <h4 class="weather">${data.weather[0].main}</h4>
                <h4 class="desc">${data.weather[0].description}</h4>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                <h1>${data.main.temp} &#176;C</h1>
                <div class="temp_container">
                    <div>
                        <h4 class="title">min</h4>
                        <h4 class="temp">${data.main.temp_min}&#176;C</h4>
                    </div>
                    <div>
                        <h4 class="title">max</h4>
                        <h4 class="temp">${data.main.temp_max}&#176;C</h4>
                    </div>
                </div>
            `;
        })
        .catch(() => {
            show.innerHTML = `<h3 class="error">Unable to fetch weather data</h3>`;
        });
}
