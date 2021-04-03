import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Working correctly!');
});

app.listen(port, () => {
    console.log(`Started on http://localhost:${port}`);
});