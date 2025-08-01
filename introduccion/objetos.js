/* 📌 Los objetos en Javascript son variables en las que podemos estructurar informacion mediante parejas de claves y valores.

	Igual que los arreglos podemos guardar multiples valores.
	La diferencia es que en los objetos tenemos propiedades con las que podemos identificar y llamar los valores.
*/

// Ejemplo de arreglo poco útil.
// Nombre, edad, correo, suscripcion al sitio, suscripcion a los correos promocionales.
// const persona = ['Josue', 25, 'correo@correo.com', true, true];
// console.log(persona[0]);

// Ejemplo con un objeto.
const persona = {
	nombre: 'Josue',
	edad: 25,
	correo: 'correo@correo.com',
	suscripciones: {
		web: true,
	    correo: true,
	},
	coloresFavoritos: ['Azul', 'Amarillo'],
	saludo: function () {
		alert('Hola!');
	},
};

/*
    Dos formas de acceder a la propiedad de un objeto
*/
console.log(persona.nombre);
console.log(persona['edad']);

// Esto es muy util para trabajar con variables
const variable = 'correo';
console.log(persona[variable]);

// Podemos agregar nuevos valores a un objeto
persona.pais = 'Mexico';
console.log(persona);

// Podemos sobreescribir valores
persona.pais = 'Japon';
console.log(persona);

// Los objetos tambien pueden tener metodos.
//persona.saludo();