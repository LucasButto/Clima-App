let selector = document.getElementById("city-list");

function addCitiesToSelector() {
    let cities = getCitiesFromLocalStorage();

    if (cities.length == 0) {
        selector.innerHTML += `<option value="noCities" disabled selected>No hay ciudades agregadas</option>`
    }
    else {
        selector.innerHTML += `<option value="" disabled selected hidden>Seleccionar Ciudad</option>`
        for (let i = 0; i < cities.length; i++) {
            selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}

function showWeather(data) {
    let ciudad = data.name;
    let icono = data.weather[0].icon;
    let temp = data.main.temp;
    let sensaciontermica = data.main.feels_like;
    let humedad = data.main.humidity;
    let viento = data.wind.speed;
    let presion = data.main.pressure;

    let card = `<div class="card">
                    <h3>${ciudad}</h3>
                    <img src="http://openweathermap.org/img/wn/${icono}.png" alt="Imagen del clima">
                    <p>Temperatura: ${temp}°</p>
                    <p>Sensación Térmica: ${sensaciontermica}°</p>
                    <p>Humedad: ${humedad}%</p>
                    <p>Velocidad del Viento: ${viento} km/h</p>
                    <p>Presión: ${presion} P</p>
                </div>`

    let section = document.getElementById("section-weather-result");
    if (section) {
        section.innerHTML = "";
        section.innerHTML += card;
    }
}

function createCard() {

    document.querySelector('.spinner').style.display = 'block';
    removeSpinner();
    
    consultAPI(selector.value);
    document.querySelector('.card').style.display = 'none';
}

document.getElementById("consultWeather").addEventListener("click", createCard)

addCitiesToSelector();