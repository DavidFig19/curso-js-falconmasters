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
        // console.log(generos);
        
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
                    <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
                </a>
                <p class="main__media-titulo">${resultado.title}</p>
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

const cargar = async () => {
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
    cargarGeneros('movie');
    
};

cargar();
//# sourceMappingURL=bundle.js.map
