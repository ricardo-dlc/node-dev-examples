const fs = require('fs');

let data = '';

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            if (i === limite) {
                data += `${base} * ${i} = ${base * i}`;
            } else {
                data += `${base} * ${i} = ${base * i}\n`;
            }
            // console.log(`${base} * ${i} = ${base * i}`);
        }

        resolve(data);
    });
}

let crearArchivo = (base, limite) =>{
// module.exports.crearArchivo = (base) =>{
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            if (i === limite) {
                data += `${base} * ${i} = ${base * i}`;
            } else {
                data += `${base} * ${i} = ${base * i}\n`;
            }
            // console.log(`${base} * ${i} = ${base * i}`);
        }
        
        let archivo = `tablas/tabla-${base}.txt`;
        fs.writeFile(archivo, data, (err) => {
            if (err) reject(err);
            resolve(archivo);
            // console.log(`El archivo tabla-${base}.txt ha sido creado.`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}