// ========================
//  PORT
// ========================

process.env.PORT = process.env.PORT || 3000;

// ========================
//  ENTORNO
// ========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================
//  DATABASE
// ========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cursojs'
} else {
    url = 'mongodb+srv://g4:Ignacio45.@cluster0-mpwao.mongodb.net/cursojs'
}

process.env.URLDB = urlDB;