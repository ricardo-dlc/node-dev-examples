// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// function saludar() {
//     return 'Hola mundo';
// }

// let saludar = () => 'Hola mundo';

// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

let saludar = nombre => `Hola ${nombre}`;

// console.log(sumar(10, 20));
// console.log(saludar('Ricardo'));
console.log(deadpool.getNombre());