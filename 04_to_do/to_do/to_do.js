const fs = require('fs');

let toDo = [];


const crear = (descripcion) => {
    let willDo = {
        descripcion,
        completado: false
    }
    cargarDB();
    toDo.push(willDo);
    guardarDB();
    return willDo;
}

const guardarDB = () => {
    let data = JSON.stringify(toDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error(`No se pudo grabar archivo DB, Causa: ${err}`);
    })
}

const cargarDB = () => {
    try {
        toDo = require('../db/data.json');
    } catch (err) {
        toDo = [];
    }
}

const getListado = () => {
    cargarDB();
    return toDo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let response;
    let index = toDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        toDo[index].completado = completado;
        guardarDB();
        response = true;
    } else {
        response = false;
    }

    return response;
}

const borrar = (descripcion) => {
    cargarDB();
    let response;
    let index = toDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        toDo.splice(index, 1);
        guardarDB();
        response = true;
    } else {
        response = false;
    }

    return response;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}