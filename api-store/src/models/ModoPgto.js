const mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        detalhe: {
            type: String,
            required: true
        }
    });

    return mongoose.model('ModoPgto', schema);
}