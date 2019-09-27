const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('public'));

app.listen(9000,() => {
    console.log('Servidor desde el puerto 9mil')
});