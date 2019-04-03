"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var MySQL = /** @class */ (function () {
    function MySQL() {
        this.conectado = false;
        console.log('Clase Inicializada');
        this.conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'db'
        });
        this.connect();
    }
    Object.defineProperty(MySQL, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    MySQL.prototype.connect = function () {
        var _this = this;
        this.conn.connect(function (err) {
            if (err) {
                return console.log(err.message);
            }
            _this.conectado = true;
            console.log('Base de datos Online');
        });
    };
    return MySQL;
}());
exports.default = MySQL;
