const app = require('./config/server');

const port = app.get('port');
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});