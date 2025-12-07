const fetchPopulares =  async () =>{
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=17c8e5f099f8712af5d2307d14218850&language=es-MX&page=1';
    
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.results;
    }catch(error){
        console.log(error);
        
    }
    
    
}

export default fetchPopulares;