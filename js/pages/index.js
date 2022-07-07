let selector = document.getElementById("city-list");

function agregarCiudadesSelector() {
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

function crearTarjeta() {

    document.querySelector('.spinner').style.display = 'block';

    buscarDatos(selector.value);
    
    document.querySelector('.card').style.display = 'none';
}

document.getElementById("consultar").addEventListener("click", crearTarjeta)

agregarCiudadesSelector();