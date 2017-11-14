const mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        endereco: {
            type: String,
            required: true
        },
        telefone: {
            type: Number,
            required: true
        },
        cpf: {
            type: Number,
            required: true
        },
        dataCadastro: {
            type: Date,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        }
    });

    return mongoose.model('Vendedor', schema);
}