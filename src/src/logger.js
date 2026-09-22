function logger (req, res, netx) {
    const agora = new Date(). toISOString();
    const metado = req.method;
    const url = req.url;
    const ip  = req.ip || req.connection.remoteAddress;

    console.log(`[${agora}] ${metado} ${url} - IP: ${ip}`);

    netx();  
}
module.exports = logger;

const logger = require('./src/middlewares/logger');

app.use(express.json());
app.use(logger);

app.use('/tarefas', tarefasRoutes);
app.use('/usuarios', usuariosRoutes);

