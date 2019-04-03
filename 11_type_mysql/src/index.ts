import Server from "./server/server";
import router from "./router/router";
import MySQL from "./mysql/mysql";


//No es necesario llamarla aca por el patron Singletone
//MySQL.instance;

const server = Server.init(3000);
server.app.use(router);
server.start(()=>{
    console.log('Servidor corriendo en el puerto 3000');
});

