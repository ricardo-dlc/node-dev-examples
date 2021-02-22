const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((result) => {
                let titulo = colors.yellow('Mostrando la tabla del:') + colors.green(` ${argv.base}`);
                console.log('='.repeat(titulo.length));
                console.log(titulo);
                console.log('='.repeat(titulo.length));
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
        // console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`El archivo ${colors.green(archivo)} ha sido creado`);
            })
            .catch((err) => {
                console.log(err);
            })
        // console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
