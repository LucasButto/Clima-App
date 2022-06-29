async function validarCiudad(newCity) {
    let cities = getCitiesFromLocalStorage();
  
    for (let i = 0; i < cities.length; i++) {
        if (newCity == cities[i]) {
            return "warning";
        };
    };

    if (await buscarDatos(newCity) == "error") {
        return "error";
    }
    else {
        return "success";
    };
}

async function guardarCiudades() {
    let cities = getCitiesFromLocalStorage();
    let newCity = document.getElementById("agregarciudad").value.toUpperCase();

    switch(await validarCiudad(newCity)) {
        case "success":
            
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            
            document.querySelector('.spinner').style.display = 'block';
            sacarSpinner();
            
            document.getElementById("messajeBox").innerHTML += '<p class="mensajes success">Ciudad agregada con éxito</p>';
            sacarMensaje();
            
        break;
        case "warning":
            
            document.querySelector('.spinner').style.display = 'block';
            sacarSpinner();
        
            document.getElementById("messajeBox").innerHTML += '<p class="mensajes warning">La ciudad ingresada ya se encuentra almacenada</p>';
            sacarMensaje();
        
        break;
        case "error":
        
            document.querySelector('.spinner').style.display = 'block';
            sacarSpinner();
        
            document.getElementById("messajeBox").innerHTML += '<p class="mensajes error">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';
            sacarMensaje();
        
        break;
    };
};

document.getElementById("buttonAdd").addEventListener("click", guardarCiudades);