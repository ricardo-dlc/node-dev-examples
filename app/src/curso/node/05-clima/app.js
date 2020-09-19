const { argv } = require('./config/yargs');
const ubicacion = require('./ubicacion/ubicacion');
const clima = require('./clima/clima');


// ubicacion.obtenerLatLon(argv.ciudad)
//     .then((lugar) => {
//         clima.obtenerClima(lugar.lat, lugar.lon)
//             .then((result) => {
//                 console.log(result);
//             }).catch((err) => {
//                 console.log(err);
//             });
//     }).catch((err) => {
//         console.log(err);
//     });

const obtenerInfo = async (ciudad) => {
    try {
        let lugar = await ubicacion.obtenerLatLon(ciudad);
        let temp = await clima.obtenerClima(lugar.lat, lugar.lon);
        return `El clima en ${lugar.nombre} es de ${temp}°C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ciudad}`;
    }
}

obtenerInfo(argv.ciudad)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });