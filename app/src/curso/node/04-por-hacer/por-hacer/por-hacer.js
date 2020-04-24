const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const mostrar = () => {
    cargarDB();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        completado = completado === "false" ? false : completado;
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }

    return false;
}

const borrar = (descripcion) => {
    cargarDB();

    tareasRestantes = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (tareasRestantes.length !== listadoPorHacer.length) {
        listadoPorHacer = tareasRestantes;
        guardarDB();
        return true;
    }

    return false;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer, null, 4);

    fs.writeFile('data/tareas.json', data, (err) => {
        if (err) throw new Error(err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../data/tareas.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

module.exports = {
    crear,
    mostrar,
    actualizar,
    borrar
}