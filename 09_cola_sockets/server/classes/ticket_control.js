const fs = require('fs');
class TicketControl {
    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let data = require('../data/data.json');

        if (data.hoy === this.hoy) {

            this.ultimo = data.ultimo;

        } else {
            this.reiniciarConteo();
        }
    }

    reiniciarConteo() {
        this.ultimo = 0;
        this.grabarArchivo();
    }

    grabarArchivo() {
        let json = {
            ultimo: this.ultimo,
            hoy: this.hoy
        };
        let jsonString = JSON.stringify(json);
        fs.writeFileSync('./server/data/data.json', jsonString);
    }

    siguiente() {
        this.ultimo += 1;
        this.grabarArchivo();

        return `Ticket: ${this.ultimo}`;
    }
}

module.exports = {
    TicketControl
}