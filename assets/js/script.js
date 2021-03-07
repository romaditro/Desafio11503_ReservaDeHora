let botonRegistrar = document.getElementById("btn_registrar");
document.getElementById("rut").focus();

botonRegistrar.addEventListener("click", function() {
    let rut, nombre, apellidos, edad, correo, especialidad, fecha, hora;
    let respuesta = true;
    let msjValidacion = document.getElementById("msjValidacion");
    const patronEmail = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/";
    const patronRut = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/";

    msjValidacion.innerHTML = "";

    //Obtener los campos del formulario.
    rut = document.getElementById("rut");
    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    edad = document.getElementById("edad");
    correo = document.getElementById("correo");
    especialidad = document.getElementById("especialidad");
    fecha = document.getElementById("fecha");
    hora = document.getElementById("hora");


    //Rut
    if (rut.value.trim().length == 0) {
        msjValidacion.textContent = "El campo rut es obligatorio.";
        rut.focus();
        return false;
    } else if (!formatorut(rut.value.trim())) {
        msjValidacion.textContent = "El campo rut no posee el formato correcto. Ej: XXXXXXXX-X";
        rut.focus();
        return false;
    }


    //Nombre.
    if (nombre.value.trim().length == 0) {
        msjValidacion.textContent = "El campo nombre es obligatorio.";
        nombre.focus();
        return false;
    } else if (!soloLetras(nombre.value.trim())){
        msjValidacion.textContent = "El campo nombre solo debe contener letras.";
        nombre.focus();
        return false;
    }

    //Apellidos.
    if (apellidos.value.trim().length == 0) {
        msjValidacion.textContent = "El campo apellidos es obligatorio.";
        apellidos.focus();
        return false;
    } else if (!soloLetras(apellidos.value.trim())){
        msjValidacion.textContent = "El campo apellido solo debe contener letras.";
        apellidos.focus();
        return false;
    }

     //Edad.
     if (edad.value.trim().length == 0) {
        msjValidacion.textContent = "El campo edad es obligatorio.";
        edad.focus();
        return false;
    } else if (!soloNumeros(edad.value.trim())){
        msjValidacion.textContent = "El campo edad solo debe contener números.";
        edad.focus();
        return false;
    }


    //Correo.
    if (correo.value.trim().length == 0) {
        msjValidacion.textContent = "El campo correo es obligatorio.";
        correo.focus();
        return false;
    } else if (correo.value.trim().length > 100) {
        msjValidacion.textContent = "El campo correo no debe superar los 80 caracteres.";
        correo.focus();
        return false;
    } else if (!isValidEmail(correo.value.trim())) {
        msjValidacion.innerHTML = "El campo correo no posee el formato correcto. <br> Ej: mi.email[@]desafio-latam[.]cl";
        correo.focus();
        return false;
    }

    //Fecha.
    if (fecha.value.trim().length == 0) {
        msjValidacion.textContent = "El campo fecha es obligatorio.";
        fecha.focus();
        return false;
    } else if (!formatoFecha(fecha.value.trim())){
        msjValidacion.innerHTML = "El campo fecha no posee el formato correcto. <br> Ej: dd-mm-aaaa.";
        fecha.focus();
        return false;
    }

    

    //Si todo es correcto, mostrar mensaje de bienvenida.
    if (respuesta) {
        let bienvenida = `Estimado/a ${nombre.value.trim()}  ${apellidos.value.trim()}
        Su hora para ${especialidad.value} ha sido reservada para el dia ${hora.value}.
        Además, se le envió un mensaje a su correo ${correo.value} con el detalle de su cita.<br> 
        Gracias por preferirnos
        `;
    

        msjValidacion.innerHTML = bienvenida;
    }


    return respuesta;
});


/*
 * Función para validar el correo.
 */
const isValidEmail = function(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}

//Solo valida el formato no si es un rut valido.
const formatorut = (texto) =>{
    return /^([0-9])+\-([kK0-9])+$/i.test(texto);
}

const soloLetras = (texto) =>{
    return /^[A-Z ]+$/i.test(texto);
}

const soloNumeros = (valor) =>{
    return /^[0-9]*$/.test(valor);
}

const formatoFecha = (valor) =>{
    return /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(valor);
}



