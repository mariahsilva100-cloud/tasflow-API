const jwt = require('jsonwebtoken');

function autenticar(req, res, netx) {

    const authHeader = req.headers['authrozation'];
    if (!authHeader)
        return res.status(401).json ({ erro: 'Token nao informado'});
// extrair o token do header

const token = authHeader.split(' ') [1];
if (!token)
    return res.status(401)
.json({ erro: 'Formato invalido. Use: Bearer <token>'});

try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = payload;

    netx();

} catch (erro) {
    if (erro.nome === '´TokenExpired/Error')
        return res.status(401).json({ erro: 'Token expirado. Faca login novamente.'});

 }
}
module.export = autenticar;