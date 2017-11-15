const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');

const inserirCliente = (app, req, res) => {
    let Cliente = app.models.Cliente;

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

        return res.status(200).json({
            content: {
                "_id": data._id,
                "message": `Cliente [${data.nome}] inserido com sucesso`
            }
        });
    });

}

const selecionarCliente = (app, req, res) => {
    let Cliente = app.models.Cliente;
    Cliente.find({}, (err, data) => {

        if (err) {
            console.log(err.message);
            return res.status(500).json({ content: { "message": "Erro interno" } })
        }

        if (!data || data.length === 0)
            return res.status(404).json(data);

        return res.status(200).json(data);
    });

}

module.exports = {
    inserirCliente,
    selecionarCliente
}