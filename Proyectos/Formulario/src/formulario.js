import validarCantidad from "./validarCantidad";
const formulario = document.getElementById('formulario');


// EventListener para comprobar los campos de formulario cuando el usuario corrige.
formulario.addEventListener('keyup', (e) => {
    
    if(e.target.tagName === 'INPUT'){
        if(e.target.id === 'cantidad'){
            validarCantidad();   
        }
    }
    
});

const btnFormulario = document.getElementById('formulario__btn');
btnFormulario.addEventListener('click', (e) => {
    e.preventDefault();

    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso').dataset.paso;
    console.log(pasoActual);

    if(pasoActual === 'cantidad'){
        marcarPaso();
        validarCantidad();
    }
    
});