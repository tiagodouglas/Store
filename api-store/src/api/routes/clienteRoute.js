module.exports = (app) => {
    const cliente = require('../../core/Cliente/clienteController');

    app.post('/cliente', (req, res) => {
        cliente.inserirCliente(app, req, res);
    });

    app.get('/cliente', (req, res) => {
        cliente.selecionarCliente(app, req, res);
    });
}