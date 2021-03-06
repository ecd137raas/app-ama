var conn = require('../database/connection');
const { index } = require('./authController');

module.exports = {
    async index(req, res){
        res.status(200).render('list');
    }
}