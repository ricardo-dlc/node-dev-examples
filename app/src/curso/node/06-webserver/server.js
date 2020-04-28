const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const app = express();
const port = process.env.PORT || 8002;

app.use(express.static(__dirname + '/public'));

// Express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'yesenia sosa'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => res.send('Hola Data'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));