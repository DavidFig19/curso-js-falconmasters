/*
	📌 Palabra reservada "this"
	La palabra "this" representa algo diferente dependiendo de donde se utiliza.
*/

/*
	📌 Fuera de cualquier bloque, representa el objeto global (window)
*/
// console.log(this);

/*
	📌 Dentro de una funcion de tipo flecha, representa el objeto global.
*/
const miFuncion = () => {
	console.log(this);
};
// miFuncion();



/*
	📌 En un evento se refiere al elemento que recibio el evento
	
	Nota: Solo cuando la función no es de tipo flecha
	Si es una funcion de tipo flecha se referira al objeto global.
*/
document.getElementById('boton1').addEventListener('click', function () {
	console.log(this);
});

/*
	📌 En un metodo, representa el objeto
*/
class Usuario {
	constructor(nombre) {
		this.nombre = nombre;
		// console.log(this);
	}

	miMetodo() {
		console.log(this);
	}
}

const nuevoUsuario = new Usuario('David');
nuevoUsuario.miMetodo();