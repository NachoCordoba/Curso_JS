const argv = require('yargs')
    .command('listar', 'Lista todas las Tareas.')
    .command('crear', 'Crea una nueva Tarea.', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la Tarea.'
        }
    })
    .command('actualizar', 'Actualiza una Tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la Tarea.'
        },
        completado: {
            alias: 'c',
            demand: false,
            desc: 'Estado de la Tarea.',
            default: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}