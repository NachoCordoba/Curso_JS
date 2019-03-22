const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la Tarea.'
};

const completado = {
    alias: 'c',
    demand: false,
    desc: 'Estado de la Tarea.',
    default: true
}
const argv = require('yargs')
    .command('listar', 'Lista todas las Tareas.')
    .command('crear', 'Crea una nueva Tarea.', {
        descripcion
    })
    .command('actualizar', 'Actualiza una Tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una Tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}