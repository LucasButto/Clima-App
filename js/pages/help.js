emailjs.init('_dTu7J3vq-AlfVvXa');

function sendMail() {
    
    document.getElementById('form').addEventListener('submit', function(event) {
        
        const btn = document.getElementById('sendData');
        
        event.preventDefault();
        
        btn.value = 'Enviando...';
        
        document.querySelector('.spinner').style.display = 'block';
        removeSpinner();
        
        const serviceID = 'default_service';
        const templateID = 'template_efvt0hx';
        
        if (validateEmail() == true){
            emailjs.sendForm(serviceID, templateID, this).then(() => {
                document.getElementById("messajeBox").innerHTML += '<p class="mensajes success">Mensaje enviado con éxito</p>';
                removeMessage();
                btn.value = 'Enviar';
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
        } else {
            document.getElementById("messajeBox").innerHTML += '<p class="mensajes error">Ingrese un Mail válido</p>';
            removeMessage();
            btn.value = 'Enviar';
        };
    });
};

function validateEmail() {
    let validEmail = document.getElementById('user_email').value;

    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(validEmail)
    
    return esValido
}

sendMail();

async function Limpiar() {
    form.reset();
};

document.getElementById("buttonLimpiar").addEventListener("click", Limpiar);