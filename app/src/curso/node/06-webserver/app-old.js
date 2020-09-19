const http = require('http');

const puerto = 8002;

http
    .createServer((req, res) => {
        let respuesta = {
            nombre: 'Ricardo',
            edad: 24,
            url: req.url
        }

        res.writeHead(200, { 'Content-Type': 'application/json' })

        res.write(JSON.stringify(respuesta));
        res.end();
    })
    .listen(puerto, '0.0.0.0');

console.log(`Escuchando en el puerto ${puerto}`);