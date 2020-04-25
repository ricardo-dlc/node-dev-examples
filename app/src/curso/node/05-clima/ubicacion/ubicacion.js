const axios = require('axios');

const rapidApi = axios.create({
    "method": "GET",
    "url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key": "7826c67542mshde653a4e9cdd185p1c8a0fjsn27bc28665437"
    }
});

const obtenerLatLon = async (lugar) => {
    const res = await rapidApi.request({
        "params": {
            "location": lugar
        }
    });

    if (!res.data.Results[0]) {
        throw new Error(`No se encontaron resultados para ${lugar}`);
    }

    let filtrados = res.data.Results.filter(ubicacion => ubicacion.type !== 'country')[0];
    const data = filtrados;
    const { name: nombre, lat, lon } = data;

    return {
        nombre,
        lat,
        lon
    }
}

module.exports = {
    obtenerLatLon
}
