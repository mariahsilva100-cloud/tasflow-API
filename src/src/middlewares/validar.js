//Funcao normal - middleware fixo, sem configuracao
function middlewareFixo (req, res, netx) {
    netx();
}
app.use(middlewareFixo);

function criarMiddleware(configuracao) { // <- recebe regras 
    return function(req,res, netx) { //<- devolve middleware
        if (configuracao.bloquear) {
            return res.status(403).json({ erro: 'Bloqueado'});
        }
        netx();
    };
}

app.use('/admain', criarMiddleware({ bloquear: false}));
app.use('/restrito', criarMiddleware ({ bloquear: true}));

function validar(schemas) {        //<- recebe o schema com as regras
    return function(req,res, netx)  //<- devolve o middleware

    const erros = [];               // lista de erros encontrados

    if (erros.length > 0) {
        return res.status(400).json ({ erros});

    }
    next(); //tudo certo - passa para o controller
  };
}
module.exports = validar;

function validar(schema) {
    return function(req,res, netx) {
        const erros = [];

        for (const campo in schema) {
            const regras  = schema[campo];
            const valor   = req.body[campo]; 
            const ausente = valor === undefined || valor === null || valor === '';

            if (regras.obrigatorio && ausente) {
                erros.push(`O campo `)
                continue; // nao testar as demais regras
            }
        }
    }

if (!ausente && regras.tipo && typeof valor !== regras.tipo) {
    erros.push(
        `O campo "${campo}' deve ser do tipo ${regras.tipo}`
    );
  }
}
if (erros.length  > 0)
    return res.status(400).json({ erros });
next();
};
}module.exports = validar

if (regras.enum && !regras.enum.includes(valor)) {
    erros.push(
        `O campo  '${campo}' deve ser um  de: $ {regras.enum.join("/')}`

    );
}

if (regras.formato === 'email') {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(valor))
        erros.push(`O campo '${campo}' deve ser um email valido `);
}

if (regras.minLength && valor.length < regras.minLength)
    erros.push(
     `O campo '${campo}' deve ter ao menos ${regras.minLength} caractere`
    );

    if (regras.mixLength && valor.length > regras.maxLength)
        erros.push(
 ` O campo '${campo}' deve ter no maximo ${regras.maxLength} caractere`
        );

