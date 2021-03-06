var conn = require('../database/connection');

module.exports = {
    async index(req, res){
        conn.raw('SELECT id, name, role, therapist FROM employee;').then((result) => {
            res.status(200).render('employee', {dados: result});
            res.end();
          })
          .catch((err) => {
            res.status(400).send('Erro ao processar a requisição' + err);
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
        .then((result) => {
            res.status(200).redirect('/employee');
            res.end();
          })
          .catch((err) => {
            res.status(400).send('Erro ao processar a requisição' + err);
          });
    }

}