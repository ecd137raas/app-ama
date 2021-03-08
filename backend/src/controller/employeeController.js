var conn = require('../database/connection');

module.exports = {
    async index(req, res){
        conn.raw('SELECT id, name, role, therapist, active FROM employee;').then((result) => {
            res.status(200).send(result);
            res.end();
          })
          .catch((err) => {
            res.status(400).send(err);
          });
    },
    async indexId(req, res){
      var id = req.params.id;
      conn.raw(`SELECT id, name, role, therapist, active FROM employee WHERE id=${id};`).then((result) => {
          res.status(200).send(result);
          res.end();
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    },
    async create(req, res){
        var dadosForm = req.body;
        conn.raw(`INSERT INTO employee (name, email, role, phone, address, address2, city, uf, therapist, active) 
            VALUES('${dadosForm.name}', 
                    '${dadosForm.email}', 
                    '${dadosForm.role}',
                    '${dadosForm.phone}',
                    '${dadosForm.address}',
                    '${dadosForm.address2}',
                    '${dadosForm.city}', 
                    '${dadosForm.uf}',
                    '${dadosForm.therapist}',
                    '${dadosForm.active}')`)
        .then(() => {
            res.status(200).send({sucesso: 'Registro incluído com sucesso'});
            res.end();
          })
          .catch((err) => {
            res.status(400).send({erro: 'Erro ao processar a requisição'} + err);
          });
    },
    async update(req, res){
      var id = req.params.id;
      var json = req.body;
      
      conn.raw(`UPDATE employee SET 
                  name='${json.name}', 
                  email='${json.email}', 
                  role='${json.role}',
                  phone='${json.phone}',
                  address='${json.address}',
                  address2='${json.address2}',
                  city='${json.city}', 
                  uf='${json.uf}',
                  therapist='${json.therapist}',
                  active='${json.active}' WHERE id=${id}`)
      .then((result) => {
          res.status(200).send({sucesso: 'Registro alterado com sucesso'});
          res.end();
        })
        .catch((err) => {
          res.status(400).send({erro: 'Erro ao processar a requisição'} + err);
        });
    },
    async delete(req, res){
      var id = req.params.id;
      conn.raw(`DELETE FROM employee WHERE id=${id}`)
      .then(() => {
          res.status(200).send({sucesso: 'Registro excluído com sucesso'});
          res.end();
        })
        .catch((err) => {
          res.status(400).send({erro: 'Erro ao processar a requisição'} + err);
        });
    }

}