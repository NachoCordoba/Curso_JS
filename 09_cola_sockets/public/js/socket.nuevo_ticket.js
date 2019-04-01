// Comando para establecer comunicacion
var socket = io();

socket.on('connect', function() {
    console.log('Se establecio comunicacion');
});

socket.on('disconnect', function() {
    console.log('Se perdio la comunicacion');
});

$('button').on('click', function() {
    socket.emit('newTicket');
});

socket.on('newTicket', function(resp) {
    console.log(resp);
});