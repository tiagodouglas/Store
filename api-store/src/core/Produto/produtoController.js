const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Produto = mongoose.model('Produto');

const inserirProduto = (req, res) => {
    const params = {
        nome: req.body.nome,
        precoUnitario: req.body.precoUnitario,
        categoria: ObjectId(req.body.categoria)
    }

    Produto.create(params, (err, data) => {

        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(201).json({
            content: {
                "_id": data._id,
                "message": `Produto [${data.nome}] inserido com sucesso`
            }
        });
    });

}

const alterarProduto = (req, res) => {
    const params = {
        nome: req.body.nome,
        precoUnitario: req.body.precoUnitario,
        categoria: new ObjectId(req.body.categoria)
    }

    Produto.findOneAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(200).json({
            content: {
                "message": `Produto [${data.nome}] alterado com sucesso`
            }
        });
    });
}

const selecionarProduto = (req, res) => {
    Produto.find().populate('Categoria', (err, data) => {
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

const selecionarProdutoPorId = (req, res) => {
    Produto.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                content: { "message": "Erro interno" }
            })
        }

        if (!data || data.length === 0)
            return res.status(404).json({
                content: { 'message': 'Produto não encontrado' }
            });


        return res.status(200).json(data);

    });

}

const excluirProduto = (req, res) => {
    Produto.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
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
                "message": `Produto [${data.nome}] removido com sucesso`
            }
        });
    });
}

module.exports = {
    inserirProduto,
    selecionarProduto,
    selecionarProdutoPorId,
    alterarProduto,
    excluirProduto
}