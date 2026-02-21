import { v4 as uuidv4 } from 'uuid';

const formulario = document.querySelector('#formulario-gasto form');
const descripcion = formulario.descripcion;
const precio = formulario.precio;

const expRegDescripcion = /^[a-zA-Z0-9\_\- ]{4,30}$/;
const expRegPrecio = /^\d+(\.\d+)?$/;

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

const comprobarPrecio = () => {
    if(!expRegPrecio.test(precio.value)){
        precio.classList.add('formulario-gasto__input--error');

        formulario.precio.parentElement
            .querySelector('.formulario-gasto__leyenda')
            .classList.add('formulario-gasto__leyenda--active');

        return false;
    }else{

        precio.classList.remove('formulario-gasto__input--error');

        formulario.precio.parentElement
            .querySelector('.formulario-gasto__leyenda')
            .classList.remove('formulario-gasto__leyenda--active');
        return true;
    }

    
}

// Event listener cuando el imput descripcion pierde el focus.
descripcion.addEventListener('blur',(e) => comprobarDescripcion());
// Event listener para cuando el input tiene un error y el usuario empieza a escribir para corregirlo
descripcion.addEventListener('keyup',(e) => {
    if([...e.target.classList].includes('formulario-gasto__input--error')){
        comprobarDescripcion();
    }
    
});


// Event listener cuando el imput precio pierde el focus.
precio.addEventListener('blur',(e) => comprobarPrecio());
// Event listener para cuando el input tiene un error y el usuario empieza a escribir para corregirlo
precio.addEventListener('keyup',(e) => {
    if([...e.target.classList].includes('formulario-gasto__input--error')){
        comprobarPrecio();
    }
    
});

formulario.addEventListener('submit',(e) => {
    e.preventDefault();
    if(comprobarDescripcion() && comprobarPrecio()){

        const nuevoGasto = {
            id:uuidv4(),
            fecha: new Date(),
            descripcion:descripcion.value,
            precio:precio.value

        };

        const gastosGuardados = JSON.parse(window.localStorage.getItem('gastos'));

        //comprobamos si hay gastos
        if(gastosGuardados){
            // Creamos una nueva lista de gastos que incluya el nuevo.
            const nuevosGastos = [...gastosGuardados, nuevoGasto];
            window.localStorage.setItem('gastos',JSON.stringify(nuevosGastos))
        }else{
            window.localStorage.setItem('gastos',JSON.stringify([{ ...nuevoGasto }]));
        }

        
        
        
    }
    
});