'use strict';

const boton = document.getElementById('toggle-form-gasto');
const formularioGasto = document.getElementById('formulario-gasto');

const abrirFormulrioGasto = () => {
    boton.classList.add('agregar-gasto__btn--active');
    formularioGasto.classList.add('formulario-gasto--active');
};

const cerrarFormulrioGasto = () => {
    boton.classList.remove('agregar-gasto__btn--active');
    formularioGasto.classList.remove('formulario-gasto--active');
};


boton.addEventListener('click',(e) => {
    if([...formularioGasto.classList].includes('formulario-gasto--active')){

        cerrarFormulrioGasto();

    }else {
        abrirFormulrioGasto();
    }
    
   
    
});

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}

let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = { randomUUID };

function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return unsafeStringify(rnds);
}
function v4(options, buf, offset) {
    if (native.randomUUID && !buf && !options) {
        return native.randomUUID();
    }
    return _v4(options, buf, offset);
}

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
    }else {

        descripcion.classList.remove('formulario-gasto__input--error');

        formulario.descripcion.parentElement
            .querySelector('.formulario-gasto__leyenda')
            .classList.remove('formulario-gasto__leyenda--active');
        return true;
    }

    
};

const comprobarPrecio = () => {
    if(!expRegPrecio.test(precio.value)){
        precio.classList.add('formulario-gasto__input--error');

        formulario.precio.parentElement
            .querySelector('.formulario-gasto__leyenda')
            .classList.add('formulario-gasto__leyenda--active');

        return false;
    }else {

        precio.classList.remove('formulario-gasto__input--error');

        formulario.precio.parentElement
            .querySelector('.formulario-gasto__leyenda')
            .classList.remove('formulario-gasto__leyenda--active');
        return true;
    }

    
};

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
            id:v4(),
            fecha: new Date(),
            descripcion:descripcion.value,
            precio:precio.value

        };

        const gastosGuardados = JSON.parse(window.localStorage.getItem('gastos'));

        //comprobamos si hay gastos
        if(gastosGuardados){
            // Creamos una nueva lista de gastos que incluya el nuevo.
            const nuevosGastos = [...gastosGuardados, nuevoGasto];
            window.localStorage.setItem('gastos',JSON.stringify(nuevosGastos));
        }else {
            window.localStorage.setItem('gastos',JSON.stringify([{ ...nuevoGasto }]));
        }

        
        
        
    }
    
});
//# sourceMappingURL=bundle.js.map
