const fetchItem = async (id) => {
    const tipo = document.querySelector('.main__filtros .btn--active').id;
    
    try {
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=17c8e5f099f8712af5d2307d14218850&language=es-MX`;

       const respuesta = await fetch(url);
       const datos = await respuesta.json();

       return datos;
       
    } catch (e) {
        console.log(e);
        
    }

}
export default fetchItem;