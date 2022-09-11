let selector = document.getElementById("city-list");

function agregarCiudadesSelector() {
  let cities = getCitiesFromLocalStorage();

  if (cities === []) {
    selector.innerHTML += `<option value="noCities" disabled selected>No hay ciudades agregadas</option>`;
  } else {
    selector.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`;
    for (let i = 0; i < cities.length; i++) {
      selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`;
    }
  }
}

function crearTarjeta() {
  document.querySelector(".spinner").style.display = "block";

  buscarDatos(selector.value);

  document.querySelector(".card").style.display = "none";
}

function mostrarTarjeta(data) {
  if (document.getElementById("section-weather-result")) {
    document.getElementById("section-weather-result").innerHTML = "";
    document.getElementById(
      "section-weather-result"
    ).innerHTML = `<div class="card">
                                <h3>${data.name}</h3>
                                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Imagen del clima">
                                <p>Temperatura: ${data.main.temp}°</p>
                                <p>Sensación Térmica: ${data.main.feels_like}°</p>
                                <p>Humedad: ${data.main.humidity}%</p>
                                <p>Velocidad del Viento: ${data.wind.speed} km/h</p>
                                <p>Presión: ${data.main.pressure} P</p>
                            </div>`;
  }
}

document.getElementById("consultar").addEventListener("click", crearTarjeta);

agregarCiudadesSelector();
