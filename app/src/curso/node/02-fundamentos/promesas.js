let empleados = [{
    id: 1,
    nombre: 'Ricardo'
},{
    id: 2,
    nombre: 'Yesenia'
},{
    id: 3,
    nombre: 'Guadalupe'
}];

let salarios = [{
    id: 1,
    salario: 2000
},{
    id: 2,
    salario: 2500
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre:empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(3).then(empleado => {
    // console.log('Empleado de BD', empleado);
    getSalario(empleado).then(info => {
        console.log(`El salario del empleado ${empleado.nombre} es de ${info.salario}$`);
    }, (err) => console.log(err));
}, (err) => console.log(err));