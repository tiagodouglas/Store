const mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        data: {
            type: Date,
            required: true
        },
        modoPgto: {
            type: mongoose.Schema.ObjectId,
            ref: "ModoPgto"
        },
        taxa: {
            type: Number
        },
        total: {
            type: Number,
            required: true
        },
        desconto: {
            type: Number,
            required: true
        }
    });

    return mongoose.model('Fatura', schema);
}