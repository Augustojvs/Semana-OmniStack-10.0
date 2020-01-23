const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://meuchevique:urucubaca@cluster0-ufhzs.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Tipos de parâmetros:

// Query Params: request.query (filtros, ordenação, paginação,, ...)
// Route Parms: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alretação de um registro)



server.listen(3333);