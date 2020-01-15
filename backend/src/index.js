const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
mongoose.connect('mongodb+srv://meuchevique:urucubaca@cluster0-ufhzs.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(express.json());
app.use(routes);

// Tipos de parâmetros:

// Query Params: request.query (filtros, ordenação, paginação,, ...)
// Route Parms: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alretação de um registro)



app.listen(3333);