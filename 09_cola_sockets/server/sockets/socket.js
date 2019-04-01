const { io } = require('../server');
const { TicketControl } = require('../classes/ticket_control')

const ticketControl = new TicketControl();
io.on('connection', (client) => {
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('newTicket', () => {
        let sig = ticketControl.siguiente();
        console.log(sig);
        client.broadcast.emit('newTicket', { siguiente: sig });
    });
});