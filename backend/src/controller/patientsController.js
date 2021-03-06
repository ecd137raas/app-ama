var conn = require('../database/connection');

module.exports = {
    async index(req, res){
        var id = req.query.idpatient;
        if(id != null){
            conn.raw(`SELECT * FROM patients WHERE id=${id};`).then((result) => {
            res.status(200).render('patients', {resedit: result});
            res.end();
            })
            .catch((err) => {
            res.status(400).send('Erro ao processar a página');
            });
        } else {
        conn.raw('SELECT id, name, responsible, phone, active FROM patients;').then((result) => {
                res.status(200).render('patients', {dados: result});
                res.end();
            })
            .catch((err) => {
                res.status(400).send('Erro ao processar a requisição' + err);
            });
        }
    },
    async create(req, res){
        var dadosForm = req.body;
        var msg = 'Registro incluído com sucesso'
        var active = 'N';
    
        if(dadosForm.active == 'on'){
            active = 'S';
        }
        conn.raw(`INSERT INTO patients (name, birth, genre, degree, responsible, email, address, address2, phone, city, uf, active) 
            VALUES('${dadosForm.name}', 
                    '${dadosForm.birth}',
                    '${dadosForm.genre}',
                    '${dadosForm.degree}',
                    '${dadosForm.responsible}',
                    '${dadosForm.email}',
                    '${dadosForm.address}',
                    '${dadosForm.address2}',
                    '${dadosForm.phone}',  
                    '${dadosForm.city}', 
                    '${dadosForm.uf}', 
                    '${active}')`)
            .then((result) => {
                res.render('patients', {msg: msg});
            })
            .catch((err) => {
                res.status(400).send('Erro ao processar a requisição'+ err);
            });
    },
    async update(req, res) {
        var { id, op } = req.body;
        if(op == 'false'){
          var vl = 'N';
        } 
        if (op == 'true') {
          var vl = 'S'; 
        }
        conn.raw(`UPDATE patients SET active='${vl}' WHERE id=${id}`).then((result) => {
          res.status(200).render('patients');
          res.end();
        })
        .catch((err) => {
            res.status(400).send('Erro ao processar a requisição' + err);
        });
    }
}  