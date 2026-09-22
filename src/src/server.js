const autenticar = require('./src/middlewares/autenticar');

app.use('/auth', authRoutes);
app.use(express.json());
app.use(cors({ ... }));

app.use('/tarefas', autenticar, tarefasRoutes);
app.use('/usuarios', autenticar, usuarioRoutes);
app.use('/projetos', autenticar, projetosRoutes);

router.get('/')