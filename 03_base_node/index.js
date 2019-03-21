const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(colors.green(lista)))
            .catch(e => console.log(colors.red(e)));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.yellow(`Archivo creado: ${archivo}`)))
            .catch(e => console.log(colors.red(e)));
        break;

    default:
        console.log(colors.red('Comando no reconocido.'));
        break;
}