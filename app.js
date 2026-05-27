const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Pawel Szymanski 77054');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});