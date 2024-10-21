const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Página inicial</h1>"+"<h2>Suas opções são:</h2>" + "<li><ul>/1</ul><ul>/abacaxizar/um numero inteiro</ul><ul>/abacaxizar/seu nome</ul></li>");
})

//rota do cadastro de produtos
app.get("/1", function(req,res){
    res.send("<h1>Abacaxi! Essa é a porta 1!</h1>");
})

//rota com parametro 
app.get("/abacaxizar/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("Temos um total de " + req.params.parametro + " abacaxis!");
    for(let i = 0; i < req.params.parametro; i++){
        res.send("Abacaxi")
    }
})

//rota com parametro opcional
app.get("/abacaxizador/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
