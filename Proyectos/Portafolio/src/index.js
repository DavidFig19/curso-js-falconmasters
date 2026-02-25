import animarTexto from "./animarTexto";


window.addEventListener('load', async() =>{
   
    await animarTexto( document.querySelector('.hero__titulo--uno'),110);
    await animarTexto( document.querySelector('.hero__titulo--dos'),110);
});