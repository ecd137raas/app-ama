var conn = require('../database/connection');

module.exports = {
    async index(req, res){
        var dadosForm = req.body;
        console.log(dadosForm)
        conn.raw(`SELECT name FROM employee WHERE email='${dadosForm.email}';`).then((result) => {
          if(result.length>0){
            res.status(200).send({sucesso: 'Email encontrado'});
            res.end();
          } else {
            res.status(204).send({erro: 'Email não encontrado'});  
          }
        })
        .catch((err) => {
          res.status(400).send({erro: 'Erro ao processar a requisição'} + err);
        });
    }
}