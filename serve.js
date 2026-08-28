const express = require('express');
const app = express();
const PORTA = 3000;

app.use(express.json());

let tarefas = [{id:1, texto:"estudar node", prioridade: "alta", coluna: "afazer"}]
let usuarios = [{id:1, nome: "morango", email:"comida@gmail.com", senha:'123'}];
let proximoId = 2;
let proximoUsuario = 2;

app.get('/', (req,res) => {res.json({mensagem: 'TaskFlow API funcionando'})});
app.get('/tareafas',(req,res)=> res.json(tarefas));
app.get('/tarefas/:id', (req,res) =>{
    const id = Number(req.params.id);
    const tarefa = tarefas.find(t=> t.id ===id);

    if(!tarefa){
        return res.status(404).json({erro:'tarefa nao encontrada'})
    }
    res.json(tarefa);
})

app.post('/tarefas', (req,res)=>{
     const{texto, prioridade, coluna, cidade} = req.body;
     const novaTarefas={
        id: proximoI++,
        coluna: coluna || 'afazer',
        cidade: cidade|| "",
        prioridade: prioridade|| 'media',
        texto: texto,

     };
    tarefas.push(novaTarefas);

    res.status(201).json(novaTarefas);
})

app.put('/tarefas/:id', (req,res)=>{
    const id = Number(req.params.id);
    const {texto, prioridade, coluna, cidade} = req.body;

    const indice = tarefas.findIndex(t => t.id === id);
    if(indice === -1){
        return res.status(404).json({erro: 'Tarefa nao encontrada'});
    }
     const tarefaAtualizada = {id, texto, prioridade, coluna,cidade};
     tarefas[indice]= tarefaAtualizada;

})

app.delete('/tarefas/:id', (req,res)=>{
    const id = Number(req.params.id);
    const tarefa = tarefas.find((t=> t.id === id));
    if(!tarefa){
        return res.status(404).json({erro:"tarefa nao encontrada"});

    };
    tarefa = tarefas.filter(t => t.id !== id);
    res.json({mensagem : 'tarefa removida com sucesso'})

})

app.listen(PORTA, ()=>{
    console.log(`Servidor rodando em http://localhost${PORTA}`)
})