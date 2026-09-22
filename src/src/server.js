const router = require('../routes/auth.routes');
const autenticar = require('./src/middlewares/autenticar');

app.use('/auth', authRoutes);
app.use(express.json());
app.use(cors({ ... }));

app.use('/tarefas', autenticar, tarefasRoutes);
app.use('/usuarios', autenticar, usuarioRoutes);
app.use('/projetos', autenticar, projetosRoutes);

router.get('/', tarefasController.listar);
router.get('/:id', tarefasController.buscarPorId);

router.post('/',
    autenticar,
    validar(schemas.tarefa),
    tarefasController.criar);

    router.put('/:id', autenticar, tarefasController.atualizar);
    router.delete('/:id', autenticar, tarefasController.remover);

)