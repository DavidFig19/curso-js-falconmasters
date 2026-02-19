const formulario = document.querySelector('#formulario-gasto form');
const descripcion = formulario.descripcion;

const expRegDescripcion = /^[a-zA-Z0-9\_\- ]{4,30}$/;

const comprobarDescripcion = () => {
    if(!expRegDescripcion.test(descripcion.value)){
        descripcion.classList.add('formulario-gasto__input--error');

        formulario.descripcion.parentElement
            .querySelector('.formulario-gasto__leyenda')
            .classList.add('formulario-gasto__leyenda--active');

        return false;
    }else{

        descripcion.classList.remove('formulario-gasto__input--error');

        formulario.descripcion.parentElement
            .querySelector('.formulario-gasto__leyenda')
            .classList.remove('formulario-gasto__leyenda--active');
        return true;
    }

    
}

descripcion.addEventListener('blur',(e) => comprobarDescripcion());
descripcion.addEventListener('keyup',(e) => {
    if([...e.target.classList].includes('formulario-gasto__input--error')){
        comprobarDescripcion();
    }
    
});