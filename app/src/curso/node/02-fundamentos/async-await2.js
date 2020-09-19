let empleados = [{
    id: 1,
    nombre: 'Ricardo'
}, {
    id: 2,
    nombre: 'Yesenia'
}, {
    id: 3,
    nombre: 'Guadalupe'
}];

let salarios = [{
    id: 1,
    salario: 2000
}, {
    id: 2,
    salario: 2500
}];

let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let res = await getSalario(empleado);

    // console.log(empleado);
    return `${empleado.nombre} tiene un salario de ${res.salario}$`;
}


getInformacion(4)
    .then((mensaje) => {
        console.log(mensaje);
    }).catch((err) => {
        console.log(err);
    });
