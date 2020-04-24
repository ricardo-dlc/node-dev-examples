const baseOps = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    }
}

const actualizarOps = baseOps;
actualizarOps.completado = {
    alias: 'c',
    default: true,
    desc: 'Marca la tarea como finalizada o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Agrega la tarea a la lista de tareas por hacer', baseOps)
    .command('actualizar', 'Actualiza el estado de una tarea', actualizarOps)
    .command('mostrar', 'Muestra todas la tareas disponibles por hacer')
    .command('borrar', 'Borrar la tarea de la lista de tareas', baseOps)
    .help()
    .argv;

module.exports = {
    argv
}