const usuario = {
	nombre: 'David',
	edad: 25,
	amigos: ['Alejandro', 'Cesar', 'Manuel'],
	saludo: () => {
		console.log('Hola!');
	},
};

/*
	📌 Métodos propios
	Los objetos pueden tener métodos personalizados.
*/
usuario.saludo();

/*
	📌 Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
const resultadoKeys = Object.keys(usuario);
console.log(resultadoKeys);

/*
	📌 Object.values()
	Nos devuelve un arreglo con los valores (values) del objeto.
*/
const resultadoValores = Object.values(usuario);
// console.log(resultadoValores);

/*
	📌 Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
const resultado = Object.entries(usuario);
// console.log(resultado);

/*
	Con estos métodos se pueden hacer muchas cosas,
	como por ejemplo usarlos para contar el numero de propiedades.
*/
const entradas = Object.entries(usuario);
console.log(`El objeto tiene ${entradas.length} propiedades`);