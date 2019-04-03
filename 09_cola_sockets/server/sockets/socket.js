const { io } = require('../server');
const { TicketControl } = require('../classes/ticket_control')

const ticketControl = new TicketControl();
io.on('connection', (client) => {
    client.on('getLast', (data, callback) => {
        callback(ticketControl.getLast());
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('newTicket', (data, callback) => {
        let sig = ticketControl.siguiente();
        console.log('Se genero el ' + sig);
        callback(sig);
        client.broadcast.emit('newTicket', { siguiente: sig });
    });

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback('Es necesario especificar el escritorio');
        }

        let ticket = ticketControl.atenderTicket(data.escritorio);
        callback(ticket);

        let ultimos = ticketControl.ultimos4;
        console.log(ultimos)
        client.broadcast.emit('ticketAtendido', { ultimos });
    });
});