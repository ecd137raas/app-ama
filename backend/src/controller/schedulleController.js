var conn = require('../database/connection');
const { index } = require('./authController');
const { create } = require('./employeeController');

module.exports = {

    async index(req, res) {
        conn.raw('SELECT id, name FROM patients WHERE active="S";').then((result) => {
            res.status(200).render('schedulle', {dadospat: result});
            res.end();
          })
          .catch((err) => {
            res.status(400).send('Erro ao processar a requisição'+ err);
          });
    },
    async create(req,res){
        var dadosForm = req.body;
        dadosForm.date = new Date();
        conn.raw(`INSERT INTO schedulle (employee, role, id_patients, day_schedulle, hr_schedulle, presence, note, date) 
            VALUES('${dadosForm.employee}',
                    '${dadosForm.role}',
                    ${dadosForm.patients}, 
                    '${dadosForm.day_schedulle}', 
                    '${dadosForm.hr_schedulle}',
                    'n/a',
                    'n/a', 
                    '${dadosForm.date}')`)
            .then((result) => {
                res.redirect('/filter');
              })
              .catch((err) => {
                res.status(400).send('Erro ao processar a requisição' + err);
              })
    }
}