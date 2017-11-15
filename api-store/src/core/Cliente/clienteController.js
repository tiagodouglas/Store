const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Cliente = mongoose.model('Cliente');

const inserirCliente = (req, res) => {

    const params = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        status: req.body.status,
        dataCadastro: new Date()
    }

    Cliente.create(params, (err, data) => {

        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(201).json({
            content: {
                "_id": data._id,
                "message": `Cliente [${data.nome}] inserido com sucesso`
            }
        });
    });

}

const alterarCliente = (req, res) => {
    Cliente.findOneAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(200).json({
            content: {
                "message": `Cliente [${data.nome}] alterado com sucesso`
            }
        });
    });
}

const selecionarCliente = (req, res) => {
    Cliente.find({}, (err, data) => {

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

const selecionarClientePorId = (req, res) => {
    Cliente.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                content: { "message": "Erro interno" }
            })
        }

        if (!data || data.length === 0)
            return res.status(404).json({
                content: { 'message': 'Cliente não encontrado' }
            });


        return res.status(200).json(data);

    });

}

const excluirCliente = (req, res) => {
    Cliente.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
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
                "message": `Cliente [${data.nome}] removido com sucesso`
            }
        });
    });
}

module.exports = {
    inserirCliente,
    selecionarCliente,
    selecionarClientePorId,
    alterarCliente,
    excluirCliente
}