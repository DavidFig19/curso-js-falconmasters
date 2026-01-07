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

export default fetchGeneros;