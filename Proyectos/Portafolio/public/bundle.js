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
