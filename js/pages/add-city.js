async function validateCity(newCity) {
    let cities = getCitiesFromLocalStorage();
  
    for (let i = 0; i < cities.length; i++) {
        if (newCity == cities[i]) {
            return "warning";
        };
    };

    if (await consultAPI(newCity) == "error") {
        return "error";
    }
    else {
        return "success";
    };
}

function removeSpinner() {
    setTimeout(function() {
        document.querySelector('.spinner').style.display = 'none';
    },3000)
}

function removeMessage() {
    setTimeout(function() {
        document.getElementsByClassName("mensajes")[0].remove();
    }, 10000);
}

async function addCityToLocalStorage() {
    let cities = getCitiesFromLocalStorage();
    let newCity = document.getElementById("agregarciudad").value;
    newCity = newCity.toUpperCase()

    switch(await validateCity(newCity)) {
        case "success":
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            document.querySelector('.spinner').style.display = 'block';
            removeSpinner();
            document.getElementById("messajeBox").innerHTML += successMessage;
            removeMessage();
            break;
        case "warning":
            document.querySelector('.spinner').style.display = 'block';
            removeSpinner();
            document.getElementById("messajeBox").innerHTML += warningMessage;
            removeMessage();
            break;
        case "error":
            document.querySelector('.spinner').style.display = 'block';
            removeSpinner();
            document.getElementById("messajeBox").innerHTML += errorMessage;
            removeMessage();
            break;
    };
};

let successMessage = '<p class="mensajes success">Ciudad agregada con éxito</p>';
let errorMessage = '<p class="mensajes error">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';
let warningMessage = '<p class="mensajes warning">La ciudad ingresada ya se encuentra almacenada</p>';

let buttonAddCity = document.getElementById("buttonAdd");
buttonAddCity.addEventListener("click", addCityToLocalStorage);