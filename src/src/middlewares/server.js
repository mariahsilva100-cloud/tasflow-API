const authRouter = require('./src/routes.routes')('/auth', authRoutes);

app.use('auth', authRoutes);