import { barcelona, roma, paris, londres } from "./ciudades.js";

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let tituloSubtitulo = document.getElementById("subtitulo");
let tituloParrafo = document.getElementById("parrafo");
let tituloPrecio = document.getElementById("precio");

//Agregar elemtno click a cada enlace

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(){
        //Remover la clase "activa" en todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
    
        //Agregar la aclase active al enlace actual
        this.classList.add('active');

        //Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        tituloSubtitulo.innerHTML = contenido.subtitulo;
        tituloParrafo.innerHTML = contenido.parrafo;
        tituloPrecio.innerHTML = contenido.precio;

    });
    
});

//Función para traer información que corresponda a la cd seleccionada de ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    };
    return contenido[enlace];
};