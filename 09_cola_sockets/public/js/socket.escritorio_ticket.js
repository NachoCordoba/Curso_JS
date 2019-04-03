// Comando para establecer comunicacion
var socket = io();
var label = $('small');
var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}
var escritorio = searchParams.get('escritorio');

socket.on('connect', function() {
    console.log('Se establecio comunicacion');
});

socket.on('disconnect', function() {
    console.log('Se perdio la comunicacion');
});

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio }, function(atendido) {
        console.log(atendido);
        if (typeof(atendido) === 'object') {
            label.text('Ticket Numero: ' + atendido.numero);
        } else {
            label.text(atendido);
        }
    });
});