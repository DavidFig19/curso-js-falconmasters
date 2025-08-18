'use strict';

/*
	📌 Named Exports
	
	Podemos exportar variables y funciones utilizando named exports o default exports.
	Cuando trabajamos con named exports podemos exportar multiples cosas.
	Podemos exportar de dos formas:
	- Agregando la palabra export antes de la variable.
	- Al final de documento
*/

// Forma 1 - Palabra export
const nombre = 'Carlos Arturo';

const obtenerPosts = () => {
	return ['Post1', 'Post2', 'Post3'];
};

// Forma 2 - Final del documento
// const nombre = 'Carlos Arturo';

// const obtenerPosts = () => {
// 	return ['Post1', 'Post2', 'Post3'];
// };

// export { nombre, obtenerPosts };

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

console.log(nombre);
console.log(obtenerPosts());
