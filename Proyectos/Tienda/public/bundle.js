'use strict';

const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

thumbs.addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG'){
    const imagenSrc = e.target.src;

    //obtenemos la posicion del ultimo / 
    const lastIndex = imagenSrc.lastIndexOf('/');

    //cortamos la cadena de texto para obtener solamente una parte.
    const nombreImagen = imagenSrc.substring(lastIndex + 1);
    
    //Cambiamos la ruta de la imagen del producto.
    productoImagen.src = `./img/tennis/${nombreImagen}`;
  }
  
});
