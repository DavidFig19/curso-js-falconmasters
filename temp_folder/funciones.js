/*
	Las funciones son bloques de código que nos permiten repetir acciones sin tener que duplicar código.
	Un ejemplo muy común de donde se utilizan es cuando presionamos un boton, invocamos una funcion y ejecuta el codigo.
*/

// 📌 Forma #1
// function saludo() {
// console.log('Hola!');
// }

/* 📌 Invocamos la funcion
	Podemos invocar las funciones dentro de nuestro código, o con diferentes eventos.
	Por ejemplo cuando el usuario de click en un boton.
	
	Nota: Los parentesis son lo que invoca la función. Si no usamos parentesis solo tenemos una referencia de la función.
*/
// saludo(); // Invocamos la funcion
// const variable = saludo; // Guardamos la funcion en una variable

// 📌 Forma #2 - Asignando una funcion a una variable.
// const saludo = function () {
// 	console.log('Hola!');
// };
// saludo();

// 📌 Forma #3 - Función de tipo flecha
const saludo = () => {
	console.log('Hola!');
};

/*
    si la funcion flecha tiene una sola linea se puede acortar de la siguiente manera:
    No usa llaves {}, y no requiere return si solo tiene una expresión.
    Es una forma abreviada de escribir funciones cuando solo se ejecuta una instrucción.
    Automáticamente retorna el resultado de esa expresión
*/
const saludo2 = () => console.log('Hola! Desde saludo 2');
saludo2();