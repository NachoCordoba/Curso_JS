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


module.exports = {
    crear,
    getListado
}