function ponerTarea(id, id2){
    var tarea = document.getElementById(id).value;
    var mostrarTarea = document.getElementById(id2);
    
    if(tarea.length > 3){ 
        var item = document.createElement("div");
        item.textContent = tarea;
        item.style.letterSpacing = "1px";
        item.style.marginTop="15px";
        item.style.marginBottom = "5px";
        mostrarTarea.appendChild(item);
        
        //eliminamos este elemento al hacer click
        item.onclick = eliminar;
        //Al pulsar enter se vacia el contenido
        clearInput('insertarTexto');
    }else{       
        alert("Escribe al menos 4 carácteres"); 
        return false;
    }
}

//Elimina el objeto al hacer click
function eliminar(){
    document.getElementById("mostrarTareas").removeChild(this);
}

//Permite introducir datos con Enter y vacia el input
function submitEnter(e){
    if(e.keyCode == 13){
        ponerTarea('insertarTexto','mostrarTareas');
        clearInput('insertarTexto');
    }
    else if(e.keyCode == 27){ //Con Esc vacia el input
        clearInput('insertarTexto');
    }
}

function clearInput(id){
    document.getElementById(id).value="";
}
