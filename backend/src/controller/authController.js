var conn = require('../database/connection');

module.exports = {
    async index(req, res){
        res.status(200).render('login');
        res.end();
    },
  
    async Auth(req, res){
        var dadosForm = req.body;
        conn.raw(`SELECT name FROM employee WHERE email='${dadosForm.email}';`).then((result) => {
          if(result.length>0){
            res.status(200).render('home', {dados: result});
            res.end();
          } else {
            msgerr = 'Usuário não encontrado!'
            res.status(400).render('login', {err: msgerr});  
          }
        })
        .catch((err) => {
          res.status(400).send('Erro ao processar a requisição'+ err);
        });
    }
}