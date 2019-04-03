var socket = io();

// Escuchar eventos
socket.on('connect', function() {
    console.log('Conexion Establecida.');
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexion con el servidor.');
});

// Emitir mensaje a Servidor
// Envia informacion
socket.emit('enviarMensaje', {
    usuario: 'Nacho',
    mensaje: 'cualquier cosa'
}, function(resp) {
    console.log(resp);
});

// Escuchar mensaje del servidor
// Escucha informacion
socket.on('enviarMensaje', function(message) {
    console.log(message);
});