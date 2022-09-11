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

function sacarMensaje() {
  setTimeout(function () {
    document.getElementsByClassName("mensajes")[0].remove();
  }, 5000);
}

function sacarSpinner() {
  document.querySelector(".spinner").style.display = "none";
}
