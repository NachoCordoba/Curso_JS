const fs = require('fs');
class Ticket {
    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;
    }
}

class TicketControl {
    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];
        this.ultimos4 = [];

        let data = require('../data/data.json');

        if (data.hoy === this.hoy) {

            this.ultimo = data.ultimo;
            this.tickets = data.tickets;
            this.ultimos4 = data.ultimos4;

        } else {
            this.reiniciarConteo();
        }
    }

    reiniciarConteo() {
        this.ultimo = 0;
        this.tickets = [];
        this.ultimos4 = [];
        this.grabarArchivo();
    }

    grabarArchivo() {
        let json = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        };
        let jsonString = JSON.stringify(json);
        fs.writeFileSync('./server/data/data.json', jsonString);
    }

    siguiente() {
        this.ultimo += 1;
        let ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket);
        this.grabarArchivo();

        return `Ticket: ${this.ultimo}`;
    }

    getLast() {
        return `Ticket: ${this.ultimo}`;
    }

    atenderTicket(escritorio) {
        if (this.tickets.length === 0) {
            return 'No hay Tickets';
        }

        let numeroTicket = this.tickets[0].numero;
        this.tickets.shift(); // Quita el ultimo

        let atenderTicket = new Ticket(numeroTicket, escritorio);
        this.ultimos4.unshift(atenderTicket); // Añade al principio

        if (this.ultimos4.length > 4) {
            this.ultimos4.splice(-1, 1); // Borra el Ultimo
        }
        this.grabarArchivo();

        return atenderTicket;
    }
}

module.exports = {
    TicketControl
}