const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        clima.getClima(resp.lat, resp.lng)
            .then(console.log);
    });