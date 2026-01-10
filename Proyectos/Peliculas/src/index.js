import fetchPopulares from "./fetchPopulares";
import cargarTitulos from "./cargarTitulos";
import cargarGeneros from "./cargarGeneros";
import './listenerFiltroTipo';
import './listenerFiltroGeneros';
import './listenerBuscar';

const cargar = async () => {
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
    cargarGeneros('movie');
    
}

cargar();

