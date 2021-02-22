// const argv = require('yargs').argv;
const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'mostrar':
        // console.log('Listar todas las tareas');
        let tareas = porHacer.mostrar();
        console.log(colors.black.bgGreen(`==========${colors.bgMagenta('Tareas')}==========`));
        for (const tarea of tareas) {
            console.log(` ${colors.black.bgYellow('Descripción:')} ${tarea.descripcion}`);
            console.log(colors.black(`\t${colors.bgYellow('Completado:')} ${tarea.completado ? colors.bgGreen('Si') : colors.bgRed('No')}`));
        }
        console.log(colors.black.bgGreen('=========================='));
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado ? colors.green('Actualizado correctamente') : colors.red('Ha ocurrido un error'));
        // console.log(argv.c || argv.completado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado ? colors.green('Registro eliminado correctamente') : colors.red('Ha ocurrido un error'));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}