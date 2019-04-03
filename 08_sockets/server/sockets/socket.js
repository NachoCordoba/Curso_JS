const { io } = require('../server');

io.on('connection', (client) => {
    console.log(`Se inicio una conexion nueva`);

    client.on('disconnect', () => {
        console.log('Usuario Desconectado.');
    });

    // Escuchar al Cliente
    client.on('enviarMensaje', (message, callback) => {
        console.log(message);
        client.broadcast.emit('enviarMensaje', message);

        /*if (message.usuario) {
            callback({
                resp: 'TODO SALIO BIEN.'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL.'
            });
        }*/

    });

    // Emitir desde el servidor hacia el Cliente

    client.emit('enviarMensaje', {
        message: 'Bienvenido'
    });
});