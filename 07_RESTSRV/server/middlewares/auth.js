const jwt = require('jsonwebtoken');

// ========================
// Verificar Token
// ========================

let verifyToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.tokenSeed, (err, decoded) => {
        if (err) return res.status(401).json({
            ok: false,
            err: {
                message: 'Token no valido'
            }
        });

        req.usuario = decoded.usuario;
        next();
    });


};

// ========================
// Verificar Admin Rol
// ========================

let verifyRole = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();

    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'Permisos Denegados'
            }
        });
    }

}

module.exports = { verifyToken, verifyRole };