emailjs.init('_dTu7J3vq-AlfVvXa');

function mandarMail() {
    
    document.getElementById('form').addEventListener('submit', function(event) {
        
        document.querySelector('.spinner').style.display = 'block';
        const btn = document.getElementById('sendData');
        
        event.preventDefault();
        
        btn.value = 'Enviando...';
        
        
        
        const serviceID = 'default_service';
        const templateID = 'template_efvt0hx';
        
        if (validarEmail() == true){
            emailjs.sendForm(serviceID, templateID, this).then(() => {
                sacarSpinner();
                document.getElementById("messajeBox").innerHTML += '<p class="mensajes success">Mensaje enviado con éxito</p>';
                sacarMensaje();
                btn.value = 'Enviar';
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
        } else {
            sacarSpinner();
            document.getElementById("messajeBox").innerHTML += '<p class="mensajes error">Ingrese un Email válido</p>';
            sacarMensaje();
            btn.value = 'Enviar';
        };
        
    });
};

function validarEmail() {
    let validEmail = document.getElementById('user_email').value;

    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(validEmail)
    
    return esValido
}

mandarMail();