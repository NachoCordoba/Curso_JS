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

// ========================
//  SEED TOKEN 
// ========================

process.env.tokenSeed = process.env.tokenSeed || 'secret';

// ========================
//  TOKEN EXPIRES
// ========================
// 60 seg
// 60 min
// 24 hs
// 30 dias

process.env.tokenExpires = 60 * 60 * 24 * 30;

process.env.GCLIENT_ID = process.env.GCLIENT_ID || '589051837388-o4p7vgu74qtbn1s009udgbul279v6l0v.apps.googleusercontent.com';