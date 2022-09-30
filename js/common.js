function getCitiesFromLocalStorage() {
  let cities = localStorage.getItem("CITIES");

  if (cities) {
    cities = JSON.parse(cities);
  } else {
    cities = [];
  }
  return cities;
}

function buscarDatos(cityName) {
  let apiKey = "2c405c01826f37c50c9e4ef65e6e442d";
  const data = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`
  )
    .then((response) => {
      if (response.ok) {
        sacarSpinner();
        return response.json();
      }
      throw new Error("error");
    })
    .then((data) => {
      mostrarTarjeta(data);
    })
    .catch((error) => {
      return "error";
    });

  return data;
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

function sacarMensaje() {
  setTimeout(function () {
    document.getElementsByClassName("mensajes")[0].remove();
  }, 5000);
}

function sacarSpinner() {
  document.querySelector(".spinner").style.display = "none";
}
