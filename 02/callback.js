/*
setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);
*/

let getUsuarioById = (id, callback) => {

    let usuario = {
        id,
        nombre: 'Nacho'
    }

    if (id === 20) {
        callback(`Error`);
    } else {
        callback(null, usuario);
    }
}


getUsuarioById(2, (err, msg) => {
    if (err) {
        return console.log(err);
    }

    console.log(msg);
});