import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');
    
    // - - - CERRAR GALERIA
	// Accedemos al boton mas cercano. Esto para evitar obtener el svg o path.
	// Si tiene un dataset y un accion y es igual a cerrar-galeria, cerramos la galeria.
    // ? valida si tiene la propiedad

    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    }

    // - - - CAROUSEL SLIDE CLICK
	// Comprobamos si el elemento tiene un data set y se llama idFoto.
    if(e.target.dataset.id){
        slideClick(e);
    }

    // - - - Siguiente Imagen
    if(boton?.dataset?.accion === 'siguiente-imagen' ){
        cargarAnteriorSiguiente('siguiente');   
    }

    // - - - Anterior Imagen
    if(boton?.dataset?.accion === 'anterior-imagen' ){
       cargarAnteriorSiguiente('anterior');
    }
});