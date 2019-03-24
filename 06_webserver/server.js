const express = require('express');
const app = express();

app.use(express.static(__dirname +'/public'));

/*
app.get('/',(req,res)=>{
    let data = {
        name: 'Ignacio',
        lastname: 'Cordoba',
        url: req.url
    }
    res.send(data);
});
*/

app.listen(8080,()=>{
    console.log('Escuchando el puerto 8080');
});