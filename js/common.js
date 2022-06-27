function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");

    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function consultAPI(cityName) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2c405c01826f37c50c9e4ef65e6e442d&units=metric&lang=es`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("error")
        })
        .then(data => {
            showWeather(data);
        })
        .catch(error => {
            return "error"
        });
}


function removeSpinner() {
    setTimeout(function() {
        document.querySelector('.spinner').style.display = 'none';
    },3000)
}