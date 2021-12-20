let num_adivina, intentos, txt_numero, lbl_intentos, txt_guia, guia_valores, btn_v

function inicio() {
    
    intentos = 0;
    
    guia_valores = new Array();
    
    num_adivina = Math.floor(Math.random() * (100 - 1));
    
    txt_numero = document.getElementById('field_adivina');
    
    lbl_intentos = document.getElementById('intentos');
    
    lbl_intentos.innerHTML = `Intentos: ${intentos}/10`

    txt_numero.value = ''
    
    txt_guia = document.getElementById('guia');
    
    html_valores = document.getElementById('guia_valores');

    btn_v = document.getElementById('btn_v');

    alert('El juego comenzará intente adivinar el número, tienes 10 intentos ¡Suerte!');
}

inicio();

function reiniciar() {
    txt_numero.value = ''
    location.reload()
}

function validar() {
    if (intentos != 10) {
        guia_valores.push(txt_numero.value);
        guia_valores.forEach(element => {
            valor = element;
        });

        html_valores.innerHTML += `<li>${valor}</li>`;

        if (intentos === 9) {
            alert('La verificación siguiente es tu ultimo intento ¡Suerte!')
        }

        if (parseInt(txt_numero.value) === num_adivina) {
            alert(`¡Ganaste! este era el número ${num_adivina}`);
            txt_guia.style.color = '#00b4d8'
            txt_guia.innerHTML = `Usted adivino ¡Felicidades!, Reinicie e intente nuevamente`;
            txt_numero.disabled = true;
            btn_v.disabled = true;
        } else {
            if (parseInt(txt_numero.value) < num_adivina) {
                txt_guia.innerHTML = `El numero ${parseInt(txt_numero.value)} esta por debajo del adivinando`;
            } else {
                txt_guia.innerHTML = `El numero ${parseInt(txt_numero.value)} esta por encima del adivinando`;
            }

            intentos++;

            txt_numero.value = ''

            lbl_intentos.innerHTML = `Intentos: ${intentos}/10`
        }
    } else {
        alert(`¡El juego terminó, usted Perdío!, el número era ${num_adivina}`);
        txt_guia.style.color = '#ff0000';
        txt_guia.innerHTML = `¡Usted perdío! el numero era ${num_adivina}, Reinicie e intente nuevamente`;
        txt_numero.disabled = true;
        btn_v.disabled = true;
        html_valores.innerHTML += `<li>${txt_numero.value}</li>`;
    }
}