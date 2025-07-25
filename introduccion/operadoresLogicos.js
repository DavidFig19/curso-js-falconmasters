/* 📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

const nombre = 'Josue';
const edad = 16;
const tieneEntrada = true;
const tienePermiso = true;

// Ejemplo #1
// const permitirAcceso = edad >= 18 && tieneEntrada; // false
// console.log('Acceso permitido al concierto: ' + permitirAcceso);

// Ejemplo #2 - OR
const permitirAcceso = (edad >= 18 && tieneEntrada) || (tieneEntrada && tienePermiso);
console.log('Acceso permitido al concierto: ' + permitirAcceso);

// Ejemplo #3 - !
// Retorna true si un valor es negativo
const variable = true;
console.log(!variable); // false