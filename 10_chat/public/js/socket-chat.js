var socket = io();
var params = new URLSearchParams(window.location.search);

if (!params.has('nombre')) {
    window.location = 'index.html';
    throw new Error('El nombre es necesario');
}

var usuario = {
    nombre: params.get('nombre')
};

socket.on('connect', function() {
    socket.emit('entrarChat', usuario, function(resp) {
        console.log(resp);
    });
});



// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.on('crearMensaje', function(mensaje) {
    console.log(mensaje)
});


// Enviar información
socket.emit('crearMensaje', {
    usuario: 'Nacho',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

socket.on('listaPersonas', function(personas) {
    console.log(personas);
});