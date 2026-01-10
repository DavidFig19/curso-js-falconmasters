'use strict';

const fetchGeneros = async(filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv';

    const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=17c8e5f099f8712af5d2307d14218850&language=es-MX`;
    
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.genres;
    }catch(error){
        console.log(error);
        
    }
    
};

const obtenerGenero = (id,generos) => {
    let nombre;

    generos.forEach((elemento) => {

        if(id === elemento.id){
            nombre = elemento.name;
        }
       
        
    });

    return nombre;
};

const fetchPopulares =  async (filtro = 'movie') =>{
    const tipo = filtro === 'movie' ? 'movie' : 'tv';

    const url = `https://api.themoviedb.org/3/${tipo}/popular?api_key=17c8e5f099f8712af5d2307d14218850&language=es-MX&page=1&region=US`;
    
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const resultados = datos.results;

        const generos = await fetchGeneros();
        resultados.forEach((resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0],generos);
        });

        return resultados;
        
    }catch(error){
        console.log(error);
        
    }
    
    
};

const cargarTitulos = (resultados) =>{
    const contenedor = document.querySelector("#populares .main__grid");

    contenedor.innerHTML = '';
        
    resultados.forEach((resultado) => {
       
        const plantilla = `
            <div class="main__media">
                <a href="#" class="main__media-thumb">
                    ${
                        resultado.poster_path
                            ? `<img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />`
                            : ''
                    }
                </a>
                <p class="main__media-titulo">${resultado.title || resultado.name}</p>
                <p class="main__media-fecha">${resultado.genero}</p>
            </div>
        `;

        contenedor.insertAdjacentHTML('beforeend', plantilla);
        
    });
    
};

const contenedorGenero = document.getElementById("filtro-generos");
const cargarGeneros = async (filtro) => {

    const generos = await fetchGeneros(filtro);

    contenedorGenero.innerHTML = '';

    generos.forEach((genero) => {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = genero.name;
        btn.setAttribute("data-id", genero.id);

        contenedorGenero.appendChild(btn);
    });
};

const filtroPelicula = document.getElementById('movie');
const filtroShow = document.getElementById('tv');

filtroPelicula.addEventListener('click', async (e) => {
    e.preventDefault();
    // Cargamos los generos en la barra lateral
    cargarGeneros('movie');    

    // Obtenemos los resultados
    const resultados = await fetchPopulares('movie');

    // Los cargamos en el DOM
    cargarTitulos(resultados);

    filtroShow.classList.remove('btn--active');
    filtroPelicula.classList.add('btn--active');

    document.querySelector('#populares .main__titulo').innerText = 'Películas Populares';

});

filtroShow.addEventListener('click', async (e) => {
    e.preventDefault();
    // Cargamos los generos en la barra lateral
    cargarGeneros('tv');    

    // Obtenemos los resultados
    const resultados = await fetchPopulares('tv');

    // Los cargamos en el DOM
    cargarTitulos(resultados);

    filtroPelicula.classList.remove('btn--active');
    filtroShow.classList.add('btn--active');

    document.querySelector('#populares .main__titulo').innerText = 'Series Populares';
});

const contenedor = document.getElementById('filtro-generos');

contenedor.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.closest('button')){

        contenedor.querySelector('.btn--active')?.classList.remove('btn--active');

        // Agregamos la clase ative al boton que clickamos
        e.target.classList.add('btn--active');
    }
});

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
};

const btn = document.getElementById('btn-buscar');

btn.addEventListener('click', async (e) => {
    const resultados = await fetchBusqueda();
    cargarTitulos(resultados);
});

const cargar = async () => {
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
    cargarGeneros('movie');
    
};

cargar();
//# sourceMappingURL=bundle.js.map
