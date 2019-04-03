import mysql = require('mysql');

export default class MySQL{
    private static _instance: MySQL;

    conn: mysql.Connection;
    conectado: boolean = false;

    constructor(){
        console.log('Clase Inicializada');

        this.conn = mysql.createConnection({
            host: 'localhost',
            user:'root',
            password:'',
            database:'db'
        });
        
        this.connect();
    }

    public static get instance(){
        return this._instance || ( this._instance = new this());
    }

    private connect(){
        this.conn.connect((err: mysql.MysqlError)=>{
            if(err){
                return console.log(err.message);
            }

            this.conectado = true;
            console.log('Base de datos Online');
        });
    }

}