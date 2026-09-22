const jwt     = require('jsonwebtoken');
const usuarioModel = require('../model/usuario.model');

const authController = {
    login (req, res) {
const { email, senha } = req.body;

if (!email || !senha)
    return res.status(400). json ({erro: 'Email e senha sao obrigatorio'});
    
const usuario = usuarioModel.buscarPorEmail (email);
if (!usuario)
    return res.status(401).json({ erro: 'Credenciais invalidas'});

if (usuario.senha !== senha)
    return res.status(401)
   .json({ erro: 'Credenciais invalidas'});

   const token = jwt.sign(
    { id: usuario.id, nome: usuario.nome },
    process.env.JWT_SECRET,
    { expiresIn: '8h'}
   );

   res.json({
    token,
    usuario: { id: usuario.id, nome: usuario.nome }
   });
  },
};