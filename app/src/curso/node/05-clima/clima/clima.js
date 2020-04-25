const axios = require('axios').default;

// axios.defaults.params = {};
// axios.defaults.params['appid'] = "bc4b68bae58e3a4eaa854bcc239db4a2";
// console.log(axios.defaults);
// api.openweathermap.org/data/2.5/weather?lat=21.160000&lon=-86.830002&appid=bc4b68bae58e3a4eaa854bcc239db4a2


const weatherApi = axios.create({
    "method": "GET",
    "url": "https://api.openweathermap.org/data/2.5/weather"
});

// Solución temporal
weatherApi.interceptors.request.use(config => {
    config.params = {
        appid: 'bc4b68bae58e3a4eaa854bcc239db4a2',
        units: 'metric',
        ...config.params
    }
    return config;
});

const obtenerClima = async (lat, lon) => {
    const res = await weatherApi.request({
        "params": {
            lat,
            lon
        }
    });

    return res.data.main.temp;
}

module.exports = {
    obtenerClima
}