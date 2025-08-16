/* 📌 Las condicionales son un tipo de bloque que nos permite ejecutar código dependiendo de si se cumple una condición o no 
	Normalmente se utilizan operadores de comparación.
*/

/*
	📌 Operadores de Comparación:
	==		Igual que
	===		Igual en valor y typo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario

	📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

// 📌 Estructura de una condicional
/* Condición */
if (true) {
	// Código a ejecutar
}

// 📌 Ejemplo #1:
const usuario1 = {
	edad: 17,
	pais: 'mexico',
	ticket: true,
};

if (usuario1.edad > 17) {
	// edad >= 18
	console.log('El usuario es mayor de edad, puede entrar al concierto.');
} else {
	console.log('El usuario es menor de edad, no puede entrar al concierto');
}

// 📌 Ejemplo #2 - combinando operadores
const usuario2 = {
	edad: 25,
	pais: 'mexico',
	ticket: false,
};
if (usuario2.edad > 17 && usuario2.ticket) {
	// edad >= 18
	console.log('El usuario es mayor de edad y tiene un ticket.');
} else {
	console.log('El usuario es menor de edad o no tiene un ticket.');
}

// 📌 Ejemplo #3 - Anindando condicionales
const usuario3 = {
	edad: 25,
	pais: 'mexico',
	ticket: false,
};

if (usuario3.edad >= 18) {
	if (usuario3.ticket) {
		console.log('El usuario es mayor de edad y tiene ticket.');
	} else {
		console.log('El usuario es mayor de edad, pero no tiene ticket.');
	}
} else {
	console.log('El usuario es menor de edad, no puede entrar al concierto.');
}

// 📌 Ejemplo #4 - elseif
const usuario4 = {
	edad: 27,
	pais: 'colombia',
	ticket: false,
};

if (usuario4.pais === 'mexico') {
	console.log('El usuario es mexicano');
} else if (usuario4.pais === 'españa') {
	console.log('El usuario es español');
} else if (usuario4.pais === 'argentina') {
	console.log('El usuario es argentino');
} else {
	console.log('El usuario es de otro pais');
}