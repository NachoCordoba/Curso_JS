/*
let getNombre = async() => {

    //throw new Error('No existe el nombre solicitado');  Error Personalizado para el Catch
    setTimeout(() => {
        return 'Nacho';
    }, 3000);

};
*/

/*
Seria lo mismo que:
*/
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Nacho');
        }, 3000);
    });
};


//console.log(getNombre());

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

getNombre().then()

saludo().then(msg => {
    console.log(msg);
}).catch(err => {
    console.log('Error de Async', err);
});