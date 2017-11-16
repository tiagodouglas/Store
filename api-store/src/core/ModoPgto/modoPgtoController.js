const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const ModoPgto = mongoose.model('ModoPgto');

const inserirModoPgto = (req, res) => {

    const params = {
        nome: req.body.nome,
        detalhe: req.body.detalhe       
    }

    ModoPgto.create(params, (err, data) => {

        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(201).json({
            content: {
                "_id": data._id,
                "message": `ModoPgto [${data.nome}] inserido com sucesso`
            }
        });
    });

}

const alterarModoPgto = (req, res) => {
        const params = {
        nome: req.body.nome,
        detalhe: req.body.detalhe      
    }

    ModoPgto.findOneAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(200).json({
            content: {
                "message": `ModoPgto [${data.nome}] alterado com sucesso`
            }
        });
    });
}

const selecionarModoPgto = (req, res) => {
    ModoPgto.find({}, (err, data) => {

        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            })


        if (!data || data.length === 0)
            return res.status(404).json(data);

        return res.status(200).json(data);
    });

}

const selecionarModoPgtoPorId = (req, res) => {
    ModoPgto.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                content: { "message": "Erro interno" }
            })
        }

        if (!data || data.length === 0)
            return res.status(404).json({
                content: { 'message': 'ModoPgto não encontrado' }
            });


        return res.status(200).json(data);

    });

}

const excluirModoPgto = (req, res) => {
    ModoPgto.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            })
        }

        return res.status(200).json({
            content: {
                "message": `ModoPgto [${data.nome}] removido com sucesso`
            }
        });
    });
}

module.exports = {
    inserirModoPgto,
    selecionarModoPgto,
    selecionarModoPgtoPorId,
    alterarModoPgto,
    excluirModoPgto
}