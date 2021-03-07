document.getElementById("reservar").addEventListener("click", function() {


    let paciente = new Object();

    paciente.rut = document.getElementById("rut").value;
    paciente.nombre = document.getElementById("nombre").value;
    paciente.apellido = document.getElementById("apellido").value;
    paciente.edad = document.getElementById("edad").value;
    paciente.email = document.getElementById("email").value;


    //console.table(paciente);
    console.log(JSON.stringify(paciente));
    return false;
});