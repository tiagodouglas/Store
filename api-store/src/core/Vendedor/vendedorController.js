const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Vendedor = mongoose.model('Vendedor');

const inserirVendedor = (req, res) => {

    const params = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        status: req.body.status,
        dataCadastro: new Date()
    }

    Vendedor.create(params, (err, data) => {

        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(201).json({
            content: {
                "_id": data._id,
                "message": `Vendedor [${data.nome}] inserido com sucesso`
            }
        });
    });

}

const alterarVendedor = (req, res) => {
    const params = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        status: req.body.status,
        dataCadastro: new Date()
    }

    Vendedor.findOneAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(200).json({
            content: {
                "message": `Vendedor [${data.nome}] alterado com sucesso`
            }
        });
    });
}

const selecionarVendedor = (req, res) => {
    Vendedor.find({}, (err, data) => {

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

const selecionarVendedorPorId = (req, res) => {
    Vendedor.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                content: { "message": "Erro interno" }
            })
        }

        if (!data || data.length === 0)
            return res.status(404).json({
                content: { 'message': 'Vendedor não encontrado' }
            });


        return res.status(200).json(data);

    });

}

const excluirVendedor = (req, res) => {
    Vendedor.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
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
                "message": `Vendedor [${data.nome}] removido com sucesso`
            }
        });
    });
}

module.exports = {
    inserirVendedor,
    selecionarVendedor,
    selecionarVendedorPorId,
    alterarVendedor,
    excluirVendedor
}