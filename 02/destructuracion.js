let persona = {
    dni: 41307566,
    apellido: 'Cordoba',
    nombre: 'Ignacio',
    //getNombreCompleto(){}
    getNombreCompleto: function() {
        return `Apellido: ${this.apellido}  Nombre: ${this.nombre}`
    }
}

//console.log(persona.getNombreCompleto())

let { nombre: nombrePersona, apellido, dni } = persona;

console.log(nombrePersona, apellido, dni);