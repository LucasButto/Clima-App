async function validarCiudad(nuevaCiudad) {
    let cities = getCitiesFromLocalStorage();
  
    for (let i = 0; i < cities.length; i++) {
        if (nuevaCiudad == cities[i]) {
            return "warning";
        };
    };

    if (await buscarDatos(nuevaCiudad) == "error") {
        return "error";
    }
    else {
        return "success";
    };
}

async function guardarCiudades() {
    let cities = getCitiesFromLocalStorage();
    let nuevaCiudad = document.getElementById("agregarciudad").value.toUpperCase();

    document.querySelector('.spinner').style.display = 'block';
    
    if (await validarCiudad(nuevaCiudad) == "success") {
        cities.push(nuevaCiudad);
        localStorage.setItem("CITIES", JSON.stringify(cities));
        sacarSpinner();
        
        document.getElementById("messajeBox").innerHTML += '<p class="mensajes success">Ciudad agregada con éxito</p>';
        sacarMensaje();
    } else {
        if (await validarCiudad(nuevaCiudad) == "warning") {
            sacarSpinner();
            document.getElementById("messajeBox").innerHTML += '<p class="mensajes warning">La ciudad ingresada ya se encuentra almacenada</p>';
            sacarMensaje();
        } 
        else {
            sacarSpinner();
            document.getElementById("messajeBox").innerHTML += '<p class="mensajes error">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';
            sacarMensaje();
        }
    };
};

document.getElementById("buttonAdd").addEventListener("click", guardarCiudades);