let selector = document.getElementById("city-list");

function addCitiesToSelector() {
    let cities = getCitiesFromLocalStorage();

    if (cities.length == 0) {
        selector.innerHTML += `<option value="noCities" disabled selected>No hay ciudades agregadas</option>`
    }
    else {
        selector.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`
        for (let i = 0; i < cities.length; i++) {
            selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
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