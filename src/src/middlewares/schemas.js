const schemas = {
    tarefa: {
        texto:      { obrigatorio: true,  tipo: 'string' },
        prioridade: { obrigatorio: true,  tipo: 'string', enum: ['alta', 'media', 'baixa'] },
        coluna:     { obrigatorio: true,  tipo: 'string', enum: ['afazer', 'andamento','concluindo'] },
        usuarioId:  { obrigatorio: true,  tipo: 'number' },
    },

usuario: {
    nome: { obrigatorio: true, tipo: 'string',  minLength: 3 },
    email:{ obrigatorio: true, tipo: 'string',  formato: 'email'},
    senha:{ obrigatorio: true, tipo:  'string', minLength: 6 },
    },

projeto: {
    nome:      { obrigatorio: true, tipo: 'string' },
    descricao: {obrigatorio:  true, tipo: 'string', maxLength: 200 },
  },
};
module.exports = schemas;
