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

function removeSpinner() {
    setTimeout(function() {
        document.querySelector('.spinner').style.display = 'none';
    },3000)
}

function createCard() {
    setTimeout(function() {
        document.querySelector('.card').style.display = 'none';
    },0.1)
    
    document.querySelector('.spinner').style.display = 'block';
    removeSpinner();

    setTimeout(function() {
        document.querySelector('.card').style.display = 'block';
    },0.1)
    consultAPI(selector.value);
}

let consultButton = document.getElementById("consultWeather");
consultButton.addEventListener("click", createCard)

addCitiesToSelector();