const { io } = require('../server');
const { Usuarios } = require('../classes/usuario')
const usuarios = new Usuarios();

io.on('connection', (client) => {
    client.on('entrarChat', (data, callback) => {
        console.log(data);
        if (!data.nombre) {
            return callback({
                error: true,
                msg: 'El nombre es necesario'
            });
        }

        let personas = usuarios.agregarPersona(client.id, data.nombre);

        client.broadcast.emit('listaPersonas', usuarios.getPersonas());
        callback(personas);
    });

    client.on('disconnect', () => {
        let personaBorrada = usuarios.borrarPersona(client.id);

        client.broadcast.emit('crearMensaje', { usuario: 'Administrador', mensaje: `${personaBorrada.nombre} abandonó el chat.` });
        client.broadcast.emit('listaPersonas', usuarios.getPersonas());
    });
});