const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Venda = mongoose.model('Venda');

const inserirVenda = (req, res) => {

    const params = {
        nome: req.body.nome,
        vendedor: req.body.vendedor,     
        dataVenda: new Date(),
        desconto: req.body.desconto,
        taxa: req.body.taxa,
        total: req.body.total
      
    }

    Venda.create(params, (err, data) => {

        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            });

        return res.status(201).json({
                "_id": data._id,
                "message": `Venda [${data.nome}] inserido com sucesso`
        });
    });

}

const alterarVenda = (req, res) => {
    const params = {
        nome: req.body.nome,
        vendedor: req.body.vendedor,     
        dataVenda: new Date(),
        desconto: req.body.desconto,
        taxa: req.body.taxa,
        total: req.body.total
    }

    Venda.findByIdAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            });

        return res.status(200).json({
                "message": `Venda [${data.nome}] alterado com sucesso`
        });
    });
}

const selecionarVenda = (req, res) => {
    Venda.find({}, (err, data) => {

        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            })

        return res.status(200).json(data);
    });

}

const selecionarVendaPorId = (req, res) => {
    Venda.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                 "message": "Erro interno" 
            })
        }

        return res.status(200).json(data);

    });

}

const excluirVenda = (req, res) => {
    Venda.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json({
                    "message": "Erro interno"
            })
        }

        return res.status(200).json({
                "message": `Venda [${data.nome}] removido com sucesso`
        });
    });
}

module.exports = {
    inserirVenda,
    selecionarVenda,
    selecionarVendaPorId,
    alterarVenda,
    excluirVenda
}