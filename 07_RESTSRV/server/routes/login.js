const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GCLIENT_ID);

const Usuario = require('../models/usuario');
const app = express();

// Configuraciones de Google

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GCLIENT_ID
    });
    const payload = ticket.getPayload();

    return {
        nombre: payload.name,
        email: payload.email,
        img: payload.picture,
        google: true
    }
}

app.post('/login', (req, res) => {
    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuario) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o Clave incorrecta'
                }
            });
        }

        if (!bcrypt.compareSync(body.password, usuario.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o Clave incorrecta'
                }
            });
        }
        let token = jwt.sign({ usuario }, process.env.tokenSeed, { expiresIn: process.env.tokenExpires });

        return res.json({
            ok: true,
            usuario,
            token
        });
    });

});

app.post('/authGoogle', async(req, res) => {
    let token = req.body.idtoken;
    let googleObj = await verify(token)
        .catch(err => {
            return res.status(403).json({
                ok: false,
                err
            })
        });

    Usuario.findOne({ email: googleObj.email }, (err, obj) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (obj) {
            if (obj.google === false) {
                return res.status(500).json({
                    ok: false,
                    err: {
                        message: 'Ya se encuentra registrado'
                    }
                });
            } else {
                let token = jwt.sign({ usuario: obj }, process.env.tokenSeed, { expiresIn: process.env.tokenExpires });
                return res.json({
                    ok: true,
                    usuario: obj,
                    token
                });
            }
        } else {
            // Si no existe el usuario, lo crea
            let usuario = new Usuario();

            usuario.nombre = googleObj.nombre;
            usuario.email = googleObj.email;
            usuario.img = googleObj.img;
            usuario.google = true;
            usuario.password = 'GooglePasswordAssigment';

            usuario.save((err, obj) => {
                if (err) return res.status(500).json({
                    ok: false,
                    err
                });

                let token = jwt.sign({ usuario: obj }, process.env.tokenSeed, { expiresIn: process.env.tokenExpires });
                return res.json({
                    ok: true,
                    usuario: obj,
                    token
                })
            });
        }

    });
});

module.exports = app;