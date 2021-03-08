var conn = require('../database/connection');
const { index } = require('./authController');
const { create } = require('./employeeController');

module.exports = {
    async index(req, res){
        var id = req.query.idschedulle;
        res.status(200).render('notes', {dados: id});
        res.end();
    },
    async create(req, res){
        var dadosForm = req.body;
        dadosForm.date = new Date();
        if (typeof dadosForm.id){
            conn.raw(`UPDATE schedulle SET presence='${dadosForm.presence}', note='${dadosForm.note}', date='${dadosForm.date}' WHERE id= ${dadosForm.id}`).then((result) => {
                res.status(200).render('notes');
                res.end();
            })
            .catch((err) => {
                res.status(400).send('Erro ao processar a página'+err);
            })
        } else {
            res.status(400).send('Falha nos parâmetros enviados');
        }
    }
}