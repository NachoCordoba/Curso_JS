/*  function sumar(a, b) {
        return a + b;
    }


    console.log(sumar(10, 20));
*/

//  let sumar = (a, b) => {
//      return a + b;
//  }

//  console.log(sumar(10, 20));

/*
let sumar = (a, b) => a + b;

console.log(sumar(10, 20));
*/


//let saludar = () => 'Hola Mundo';

let saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar('Nacho'));




let persona = {
    dni: 41307566,
    apellido: 'Cordoba',
    nombre: 'Ignacio',
    //getNombreCompleto(){}
    getNombreCompleto() {
        return `Apellido: ${this.apellido}  Nombre: ${this.nombre}`;
    }

}

console.log(persona.getNombreCompleto());