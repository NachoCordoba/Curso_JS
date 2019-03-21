const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es un Numero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`);
        });

    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`No es un Numero`);
            return;
        }

        let data = ``;

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }

        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};