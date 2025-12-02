import validarCantidad from "./validaciones/validarCantidad";
import validarCorreo from "./validaciones/validarCorreo";
import validarNombre from "./validaciones/validarNombre";

const linea = document.getElementById('linea-pasos');

linea.addEventListener('click', (e) => {
    if(!e.target.closest('.linea-pasos__paso')){
        return false;
    }
    
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;
   
    // Validamos el campo actual
    if(pasoActual === 'cantidad'){
        if(!validarCantidad()) return;
    }else if(pasoActual === 'datos'){
        if(!validarNombre() || !validarCorreo()) return;
    }

    // Obtenemos el paso al que se quiere navegar.
    const pasoANavegar = e.target.closest('.linea-pasos__paso');


    // Comprobamos si el paso tiene el icono de la palomita.
    // Solo queremos poder dar click a los que tienen palomita.
    if(pasoANavegar.querySelector('.linea-pasos__paso-check--checked')){
        const pasoActual = linea.querySelector('.linea-pasos__paso-check--active');
        pasoActual.classList.remove('linea-pasos__paso-check--active');

        // Obtenemos el identificador del paso al que navegaremos.
        const id = pasoANavegar.dataset.paso;
        console.log(id);
        
        // Agregamos la clase de active al nuevo paso.
        linea.querySelector(`[data-paso="${id}"] span`).classList.add('linea-pasos__paso-check--active');

        // Nos aseguramos de que el boton diga "Siguiente"
        const btnFormulario = document.getElementById('formulario__btn');
        btnFormulario.querySelector('span').innerText = 'Siguiente';

        // Nos aseguramos de ocultar y mostrar los iconos correspondientes.
        btnFormulario.querySelector('[data-icono="banco"]').classList.remove('formulario__btn-contenedor-icono--active');
        btnFormulario.querySelector('[data-icono="siguiente"]').classList.add('formulario__btn-contenedor-icono--active');

        // Nos aseguramos de quitar la clase que deshabilita el boton.
        btnFormulario.classList.remove('formulario__btn--disabled');

        // Navegar al paso
        document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
            inline: 'start',
            behavior:'smooth'
        });

       
        
    }

   
    
});