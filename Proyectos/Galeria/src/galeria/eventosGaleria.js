import cerrarGaleria from "./cerrarGaleria";

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
    
});