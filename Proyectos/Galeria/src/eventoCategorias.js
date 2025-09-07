const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', ( e) => {
    e.preventDefault();
    
    if(e.target.closest('a')){
        console.log('ejecuta');
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';
    }
})