function validarContentType( req, res, netx) {
    const metadosComBody = ['POST', 'PUT', 'PATCH'];

    if (metodosComBody.includes(req.method)) {
        const contentType = res.headrs['constent-type'];

        if(!contentType || !contentType.includes('application/json')) {
           return res.status(415).json({
            erro: 'Content-Type invalido. Use: application/json',
           });
        }
    }
  netx();
}
module.exports = validarContentType;