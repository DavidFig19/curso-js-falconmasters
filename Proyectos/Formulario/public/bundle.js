'use strict';

const formulario$3 = document.getElementById('formulario');

const validarCantidad = () => {
    // Aceptamos cualquier digito (0-9), y un punto con decimales (opcional)
    const expRegCantidad = /^\d+(\.\d+)?$/;

    // Obtenemos el input cantidad
    const inputCantidad = formulario$3.cantidad;

    if(expRegCantidad.test(inputCantidad.value)){
        inputCantidad.classList.remove('formulario__input--error');
        return true;
    }else {
        inputCantidad.classList.add('formulario__input--error');
        return false;
    }
    
    
};

const formulario$2 = document.getElementById('formulario');

const validarNombre = () => {
    
    const expRegularNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    // Obtenemos el input nombre
    const inputNombre = formulario$2['nombre-receptor'];

    if(expRegularNombre.test(inputNombre.value)){
        inputNombre.classList.remove('formulario__input--error');
        return true;
    }else {
        inputNombre.classList.add('formulario__input--error');
        return false;
    }
    
    
};

const formulario$1 = document.getElementById('formulario');

const validarCorreo = () => {
    
    const expRegularCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // Obtenemos el input nombre
    const inputCorreo = formulario$1['correo-receptor'];

    if(expRegularCorreo.test(inputCorreo.value)){
        inputCorreo.classList.remove('formulario__input--error');
        return true;
    }else {
        inputCorreo.classList.add('formulario__input--error');
        return false;
    }
    
    
};

const marcarPaso = (paso) => {
    document
        .querySelector(`.linea-pasos [data-paso="${paso}"] span`)
        .classList.add('linea-pasos__paso-check--checked');
};

const siguientePaso = () => {

    // Creamos un arreglo con los pasos.
    const pasos = [...document.querySelectorAll('.linea-pasos__paso')];
    
    // Obtenemos el paso activo.
    const pasoActivo = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso');
    

    // Obtenemos el index del paso activo.
    const indexPasoActivo = pasos.indexOf(pasoActivo);

    if(indexPasoActivo < pasos.length - 1){
        // Eliminamos la clase de paso activo.
        pasoActivo.querySelector('span').classList.remove('linea-pasos__paso-check--active');

        // Ponemos la clase de paso activo al siguiente elemento.
        pasos[indexPasoActivo + 1].querySelector('span').classList.add('linea-pasos__paso-check--active');

        const id = pasos[indexPasoActivo + 1].dataset.paso;
        document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
            inline:'start',
            behavior:'smooth'
        });
        
    }
    
};

const formulario = document.getElementById('formulario');

//Reiniciando el scroll al cargar el formulario.
formulario.querySelector('.formulario__body').scrollLeft = 0;

// EventListener para comprobar los campos de formulario cuando el usuario corrige.
formulario.addEventListener('keyup', (e) => {
    
    if(e.target.tagName === 'INPUT'){
        if(e.target.id === 'cantidad'){
            validarCantidad();   
        }else if(e.target.id === 'nombre-receptor'){
            validarNombre();
        }else if(e.target.id === 'correo-receptor'){
            validarCorreo();
        }
    }
    
});

const btnFormulario = document.getElementById('formulario__btn');
btnFormulario.addEventListener('click', (e) => {
    e.preventDefault();

    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;


    if(pasoActual === 'cantidad'){
        if(validarCantidad()){
            marcarPaso('cantidad');
            siguientePaso();
        }
    }else if(pasoActual === 'datos'){
        if(validarNombre() && validarCorreo()){
            marcarPaso('datos');
            siguientePaso();
        }
    }else if(pasoActual === 'metodo'){
        marcarPaso('metodo');

        // Formato de moneda
        const opciones = {style:'currency', currency:'MXN'};
        const formatoMoneda = new Intl.NumberFormat('es-MX',opciones);

        document.querySelector('[data-valor="cantidad"] span').innerText = formatoMoneda.format(formulario.cantidad.value);
        document.querySelector('[data-valor="nombre-receptor"] span').innerText = formulario['nombre-receptor'].value;
        document.querySelector('[data-valor="correo-receptor"] span').innerText = formulario['correo-receptor'].value;
        document.querySelector('[data-valor="metodo"] span').innerText = formulario.metodo.value;

        // Cambiamos el texto del btn a Transferir
        btnFormulario.querySelector('span').innerText = 'Transferir';

        // Agregamos la clase que deshabilita el boton.
        btnFormulario.classList.add('formulario__btn--disabled');

        // Ocultamos el icono de siguiente.
        btnFormulario.querySelector('[data-icono="siguiente"]').classList.remove('formulario__btn-contenedor-icono--active');

        // Mostramos el icono del banco.
        btnFormulario.querySelector('[data-icono="banco"]').classList.add('formulario__btn-contenedor-icono--active');

        siguientePaso();

        // Eliminamos la clase de disabled despues de 4 segundos.
        setTimeout(() => {
            btnFormulario.classList.remove('formulario__btn--disabled');

        }, 4000);

    }else if(pasoActual === 'confirmacion' && !btnFormulario.matches('.formulario__btn--disabled')){
        // Aqui se haria una peticion al servidor, una redireccion, etc.
        
        // Cambiamos el texto del btn a 'Transferir'
        btnFormulario.querySelector('span').innerText = 'Transfiriendo';
        
        // Agregamos la clase que deshabilita el boton.
        btnFormulario.classList.add('formulario__btn--disabled');

        setTimeout(() => {
            formulario.classList.add('formulario--hidden');
            document.getElementById('alerta').classList.add('alerta--active');
        }, 4000);
    }
    
});

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
//# sourceMappingURL=bundle.js.map
