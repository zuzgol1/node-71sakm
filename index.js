require('dotenv').config();
const express = require('express');

const environment = process.env;
const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
    response.json({
        desc: 'Type /api to see task description. Type /api/docs on the end of URL to see the SWAGGER documentation',
    });
});

app.use(require('./routes'));

app.listen(environment.PORT, () => {
    console.log(`Server running on port ${environment.PORT}`);
});
