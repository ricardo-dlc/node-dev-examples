let { getUsuarioSync } = require('./usuarios/usuario');

console.log('Inicio del programa');

let usuario1 = getUsuarioSync(1);
console.log('Usuario 1: ', usuario1);

let usuario2 = getUsuarioSync(2);
console.log('Usuario 2: ', usuario2);

console.log('Hola Mundo!');