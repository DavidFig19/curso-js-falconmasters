/* 
	📌 Named Imports
*/
/* 
	📌 Named Imports
	Podemos importar variables y funciones que han sido exportadas mediante la palabra "export".
	Podemos importarlas con el mismo nombre o podemos usar un alias usando la palabra "as".
	Normalmente todos los import se establecen al inicio del documento.
*/
// import { nombre as nombreImportado, obtenerPosts } from './namedExports';
// console.log('Mi nombre es ' + nombreImportado);
// console.log(obtenerPosts());

/* 
	📌 Namespace Imports
*/
/* 
	Podemos importar todas las variables y funciones que fueron exportadas 
	con un named export dentro de un objeto.
*/
import * as datos from './namedExports';
console.log(datos.nombre);
console.log(datos.obtenerPosts());