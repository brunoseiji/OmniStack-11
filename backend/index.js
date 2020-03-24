const express = require('express');

const app = express();

app.get('/', (resquest, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Bruno Seiji'
    });
});

app.listen(3333);