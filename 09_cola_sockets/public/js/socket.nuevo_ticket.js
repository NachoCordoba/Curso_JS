// Comando para establecer comunicacion
var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect', function() {
    console.log('Se establecio comunicacion');
    socket.emit('getLast', null, function(siguiente) {
        label.text(siguiente);
    });
});

socket.on('disconnect', function() {
    console.log('Se perdio la comunicacion');
});

$('button').on('click', function() {
    socket.emit('newTicket', null, function(siguiente) {
        label.text(siguiente);
    });
});

socket.on('newTicket', function(resp) {
    label.text(resp.siguiente);
});