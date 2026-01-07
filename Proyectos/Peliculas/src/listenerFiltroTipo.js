import cargarGeneros from "./cargarGeneros";
import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

const filtroPelicula = document.getElementById('movie');
const filtroShow = document.getElementById('tv');

filtroPelicula.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Cargando Peliculas..');
    
});

filtroShow.addEventListener('click', async (e) => {
    e.preventDefault();
    // Cargamos los generos en la barra lateral
    cargarGeneros('tv');    

    // Obtenemos los resultados
    const resultados = await fetchPopulares('tv');
    cargarTitulos(resultados);
    
});