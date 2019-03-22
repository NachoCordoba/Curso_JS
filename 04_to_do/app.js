const argv = require('./config/yargs').argv;
const toDo = require('./to_do/to_do');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = toDo.getListado();
        for (let tarea of listado) {
            console.log(colors.green(`=========Por Hacer==========`));
            console.log(`Titulo: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`)
            console.log(colors.green(`============================`));
        }
        break;

    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(`Tarea Creada: ${tarea.descripcion}  Estado: ${tarea.completado}`);
        break;

    case 'actualizar':
        let act = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(`${ act ?'Se Actualizo Correctamente' :'Ocurrio un error al Actualizar' }`);
        break;
    case 'borrar':
        let del = toDo.borrar(argv.descripcion);
        console.log(`${ del ?'Se Elimino Correctamente' :'No se encontro la tarea' }`)
        break;
    default:
        console.log('Comando no reconocido.')
        break;
}