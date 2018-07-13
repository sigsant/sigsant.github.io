
var precio;

var datos = document.getElementById("verificarDatos");
var boton = document.getElementById("boton");


boton.onclick=validacion;

function validacion(){
    var nombre = document.getElementById("nombre").value;
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("tel").value;
    var email = document.getElementById("email").value;

    var contactoTel = document.getElementById("contTel");
    var contactoEmail = document.getElementById("contEmail");
    var contactoPostal = document.getElementById("contPostal");

    var nacimiento = parseInt(document.getElementById("edad").value);
    var hoy = new Date();
    var anyoActual = hoy.getFullYear();
    var edad = anyoActual - nacimiento;
    
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var novJS = document.getElementById("beginJS");
    var avanJS = document.getElementById("advanJS");
    var bootstrap = document.getElementById("bootstrap");
    var JQuery = document.getElementById("jQuery");
    var angular = document.getElementById("angular");

    precio = 0;
    var esCorrecto = false;
    var estaSeleccionado = false;

    if(html.checked){
        precio += 300;
        esCorrecto = true;
    }
    if(css.checked){
        precio += 200;
        esCorrecto = true;
    }
    if(novJS.checked){
        precio += 500;
        esCorrecto = true;
    }
    if(avanJS.checked){
        precio += 400;
        esCorrecto = true;
    }
    if(bootstrap.checked){
        precio += 200;
        esCorrecto = true;
    }
    if(JQuery.checked){
        precio += 300;
        esCorrecto = true;
    }
    if(angular.checked){
        precio += 800;
        esCorrecto = true;
    }

    if(contactoEmail.checked){
        estaSeleccionado = true;
    }

    if(contactoPostal.checked){
        estaSeleccionado = true;
    }
    if(contactoTel.checked){
        estaSeleccionado = true;
    }

    errores(nombre, dni, edad, telefono, email, esCorrecto, estaSeleccionado); 

    if(nombre.trim() == "" || edad < 18 || esCorrecto == false || estaSeleccionado == false || dni.trim() == "" || telefono.trim() == "" || email.trim() == "" || email.indexOf("@") == -1){
        datos.innerHTML = "El usuario no ha podido continuar la operación";
    }else{
        datos.innerHTML = "El usuario " + nombre + " ha contratado unos cursos que tienen por valor de " + precio +"€";
    }
    
}

function errores(usuario, nif, menor, tel, correo, cursos, contacto){
    try{
        if(usuario.trim() == "") throw "El campo \"Nombre\" está vacio";
        if(nif.trim() == "") throw "El campo \"DNI\" está vacio";
        if(menor < 18) throw "Debes ser mayor de edad para inscribirte";
        if(tel.trim() == "") throw "El campo \"Teléfono\" está vacio";
        if(cursos == false) throw "Por favor, selecciona un curso";
        if(correo.trim() == "") throw "El campo \"Correo Electrónico\" está vacio";
        if(correo.indexOf("@") == -1) throw "Escribe una dirección de correo electrónico válida"
        if(contacto == false) throw "Selecciona una forma de contacto"
    }
    catch(err){
        alert(err);
    }
}