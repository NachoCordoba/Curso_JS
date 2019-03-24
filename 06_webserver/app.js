const http = require('http');
const port=8080;

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    let data = {
        name: 'Ignacio',
        lastname: 'Cordoba',
        url: req.url
    }
    res.write(JSON.stringify(data));
    res.end();
}).listen(8080);

console.log(`Escuchando el puerto ${port}`);