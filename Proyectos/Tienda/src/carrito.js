const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');

const renderCarrito = () => {
  ventanaCarrito.classList.add('carrito--active');
}


// Abrir carrito
botonesAbrirCarrito.forEach(boton => {
  boton.addEventListener('click', (e) => {
    renderCarrito();
  })
});

// Cerrar carrito
botonesCerrarCarrito.forEach(boton => {
  boton.addEventListener('click', (e) => {
    ventanaCarrito.classList.remove('carrito--active');
  })
});