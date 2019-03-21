let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        });

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => {
            return salario.id === empleado.id;
        });

        if (!salarioDB) {
            reject(`No existe un salario con el ID ${empleado.id}`);
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
}

// Promesas
/*
    getEmpleado(4).then(empleado => {
        //console.log(`Empleado: `, empleado);
        getSalario(empleado).then(salario => {
            console.log(salario);
        }, err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
*/

// Promesas en cadena
getEmpleado(2).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
});