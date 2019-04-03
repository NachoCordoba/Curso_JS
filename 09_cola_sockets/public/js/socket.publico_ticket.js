var socket = io();
var lblTicket1 = $('#lblTicket1');
var lblEscritorio1 = $('#lblEscritorio1');

var lblTicket2 = $('#lblTicket2');
var lblEscritorio2 = $('#lblEscritorio2');

var lblTicket3 = $('#lblTicket3');
var lblEscritorio3 = $('#lblEscritorio3');

var lblTicket4 = $('#lblTicket4');
var lblEscritorio4 = $('#lblEscritorio4');

socket.on('ticketAtendido', function(tickets) {
    console.log(tickets)
    lblTicket1.text('Ticket ' + tickets.ultimos[0].numero);
    lblEscritorio1.text('Escritorio ' + tickets.ultimos[0].escritorio);

    lblTicket2.text('Ticket ' + tickets.ultimos[1].numero);
    lblEscritorio2.text('Escritorio ' + tickets.ultimos[1].escritorio);

    lblTicket3.text('Ticket ' + tickets.ultimos[2].numero);
    lblEscritorio3.text('Escritorio ' + tickets.ultimos[2].escritorio);

    lblTicket4.text('Ticket ' + tickets.ultimos[3].numero);
    lblEscritorio4.text('Escritorio ' + tickets.ultimos[3].escritorio);
});