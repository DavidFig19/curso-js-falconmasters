'use strict';

const galeria = document.getElementById('trabajos');

const observer = new IntersectionObserver(
    (entries) => {
        if(entries[0].isIntersecting){
            const trabajos = galeria.querySelectorAll('.trabajos__imagenes a');
            trabajos.forEach((trabajo, index) => {
                setTimeout(() => {
                    trabajo.classList.add('trabajos__trabajo--visible');
                }, 100 * index);
            });
            
            
        }
    },
    {
        rootMargin:'0px 0px 0px 0px',
        threshold:0.5
    }
);


observer.observe(galeria);

const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');

const datos = [
    {
        id:1,
        titulo:'Trabajo #1',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ac lacus at auctor.',
        fecha:'1 Enero de 2023'
    },
    {
        id:2,
        titulo:'Trabajo #2',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ac lacus at auctor.',
        fecha:'1 Enero de 2023'
    },
    {
        id:3,
        titulo:'Trabajo #3',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ac lacus at auctor.',
        fecha:'1 Enero de 2023'
    },
    {
        id:4,
        titulo:'Trabajo #4',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ac lacus at auctor.',
        fecha:'1 Enero de 2023'
    },
    {
        id:5,
        titulo:'Trabajo #5',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ac lacus at auctor.',
        fecha:'1 Enero de 2023'
    },
    {
        id:6,
        titulo:'Trabajo #6',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus ac lacus at auctor.',
        fecha:'1 Enero de 2023'
    }
];


trabajos.addEventListener('click', (e) => {
    e.preventDefault();

    // Comprobamos que el usuario de click en un trabajo
    const trabajoClickeado = e.target.closest('.trabajos__trabajo');

    if(trabajoClickeado){
       const id = trabajoClickeado.dataset.id;

        const trabajo = datos.filter((trabajo) => {
            if(trabajo.id === parseInt(id)){
                return trabajo;
            }
            
        });

        const {titulo,fecha,texto} = trabajo[0];

        ventanaTrabajos.querySelector('.ventana__titulo').innerText = titulo;
        ventanaTrabajos.querySelector('.ventana__fecha').innerText = fecha;
        ventanaTrabajos.querySelector('.ventana__parrafo').innerText = texto;
        ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClickeado.querySelector('img').src;

        ventanaTrabajos.classList.add('ventana--active');
        
        
    }
    
    
});


// Eventlistner para cerrar la ventana con el boton.
ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click',(e) => {
    e.preventDefault();
    ventanaTrabajos.classList.remove('ventana--active');
});

ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click',(e) => {
    e.preventDefault();

    if(e.target.matches('.ventana__overlay')){
        ventanaTrabajos.classList.remove('ventana--active');
    }
    
});

const slider = document.getElementById('slider');

// Variable que guarda el estado de si tenemos el click presionado.
let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;  // Guardamos la posicion del scroll del slider


const presiona = (e) => {
    clickPresionado = true;
    

	// e.pageX - Coordenada horizontal del evento. En que coordenada dimos click con respecto al documento.
	// slider.offsetLeft - El espacio entre el slider y la parte izquierda del documento.
    coordenadaInicial = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    console.log('pageX: ', e.pageX);
	console.log('slider.offsetLeft: ', slider.offsetLeft);
	console.log('scrollLeft: ', slider.scrollLeft);
    
};
const mueve = (e) => {
    if(!clickPresionado){
        return;
    }

    // Espaciado entre la coordenada de inicio del slider y donde dimos click.
    const espaciado = e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espaciado - coordenadaInicial;

    console.log('distancia: ', distanciaRecorrida);
	console.log('scrollLeft: ', scrollLeft);

    // Desplazamos el scroll.
	// A la posicion inicial del scroll cuando dimos click le restamos la distancia.
    slider.scrollLeft = scrollLeft - distanciaRecorrida;
    
};
const suelta = () => {
    clickPresionado = false;
    console.log('suelta');
    
};

slider.addEventListener('mousedown',presiona);
slider.addEventListener('mousemove',mueve);
slider.addEventListener('mouseup',suelta);

const animarTexto = (elemento, tiempoAnimacion = 100) =>{
    const numeroDeLetras = elemento.dataset.texto.length;

    // Activamos el cursor cuando comienza la animacion.
    const cursor = elemento.querySelector('.hero__cursor');
    cursor.classList.add('hero__cursor--visible');

    // Por cada letra, la agregamos al DOM con 100ms de separacion.
    for (let i = 0; i < numeroDeLetras; i++) {
       
        setTimeout(() => {
            const letra = document.createElement('span'); 
            letra.append(elemento.dataset.texto[i]);
            elemento.append(letra);
        }, i * tiempoAnimacion );
       
    }

    // Cambiamos la clase del cursor cuando termine la animacion de letras.
    setTimeout(() => {
        // Obtenemos los cursores.
        const cursores = [...elemento.closest('.hero__header').querySelectorAll('.hero__cursor')];
       
        // Obtenemos el index del cursor actual.
        const indexCursorActual = cursores.indexOf(cursor);
        
        // Comprobamos que el cursor no sea el ultimo.
        if(indexCursorActual < cursores.length - 1){
            // Si no es el ultimo, ocultamos el cursor.
            cursor.classList.remove('hero__cursor--visible');
        }else {
            // si es el ultimo, le ponemos la clase de active.
            cursor.classList.add('hero__cursor--active');
        }
        
        
    }, numeroDeLetras * tiempoAnimacion);

    // Retornamos una promesa para saber cuando la animacion ya acabo.
    return new Promise((resolve) =>{
        setTimeout(resolve,numeroDeLetras * tiempoAnimacion );
    });
};

window.addEventListener('load', async() =>{
   
    await animarTexto( document.querySelector('.hero__titulo--uno'),110);
    await animarTexto( document.querySelector('.hero__titulo--dos'),110);

    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
});
//# sourceMappingURL=bundle.js.map
