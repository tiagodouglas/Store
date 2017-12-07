module.exports = (app) => {
    const vendedor = require('../../core/Venda/vendaController');

    app.post('/venda', (req, res) => {
        venda.inserirVenda(req, res);
    });

    app.get('/venda', (req, res) => {
        venda.selecionarVenda(req, res);
    });

    app.get('/venda/:id', (req, res) => {
        venda.selecionarVendaPorId(req, res);
    });

    app.put('/venda/:id', (req, res) => {
        Venda.alterarVenda(req, res);
    });

    app.delete('/venda/:id', (req, res) => {
        venda.excluirVenda(req, res);
    });
}