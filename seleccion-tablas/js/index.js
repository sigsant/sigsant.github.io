'use strict';

let seleccion;

function seleccionarCategoria() {
    seleccion = document.getElementsByTagName("select")[0].value;
    let senior = document.getElementsByClassName("senior");
    let junior = document.getElementsByClassName("junior");
    let director = document.getElementsByClassName("director");

    
    if(seleccion == "senior"){
        eligeCategorias(senior);
    } else if( seleccion == "junior"){
        eligeCategorias(junior);
    } else if( seleccion == "director"){
        eligeCategorias(director);
    } 
}

function eligeCategorias(seleccionado){
    for( var i = 0; i < seleccionado.length; i++){
        seleccionado[i].classList.toggle("seleccion");
    }
}

function ocultarCeldas(){   
    let celda = document.getElementsByTagName("td");
    for(var i = 0; i < celda.length; i++){
        celda[i].classList.remove("seleccion");
    }
}