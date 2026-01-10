import fetchGeneros from "./fetchGeneros.js";
import obtenerGenero from "./obtenerGenero.js";

const fetchBusqueda = async () => {
    const tipo = document.querySelector('.main__filtros .btn--active')?.id;
    const idGenero = document.querySelector('#filtro-generos .btn--active')?.dataset.id;
    const añoInicial = document.getElementById('años-min').value || 1950;
    const añoFinal = document.getElementById('años-max').value || 2025;
   
    console.log(tipo,idGenero,añoInicial,añoFinal);

    let url;
    
    if (tipo === 'movie'){
        url = `https://api.themoviedb.org/3/discover/movie?api_key=17c8e5f099f8712af5d2307d14218850&include_adult=false&include_video=false&language=es-MX&page=1&release_date.gte=${añoInicial}-01-01&release_date.lte=${añoFinal}-12-31&sort_by=popularity.desc&with_genres=${idGenero}`;


    }else if(tipo === 'tv'){
        url = `https://api.themoviedb.org/3/discover/tv?api_key=17c8e5f099f8712af5d2307d14218850&first_air_date.gte=${añoInicial}&first_air_date.lte=${añoFinal}&include_adult=false&include_null_first_air_dates=false&language=es-MX&page=1&sort_by=popularity.desc&without_genres=${idGenero}`;

    }

    try {
        
        const repuesta = await fetch(url);
        const datos = await repuesta.json();
        const resultados = datos.results;

        const generos = await fetchGeneros();
        resultados.forEach((resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0],generos);
        });

        
        return resultados;
        
    } catch (e) {
        console.log(e);
            
    }
}

export default fetchBusqueda;