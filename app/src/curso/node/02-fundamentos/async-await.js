// let getNombre = async() => {
//     // throw new Error('No existe un nombre para este usuario');
//     return 'Ricardo'
// };

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ricardo');
        }, 3000);
    });
};

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});