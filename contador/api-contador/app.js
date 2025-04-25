const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

let count = 0;

app.get("/count", (req, res) => {
    res.send(count);
});

app.post("/count", (req, res) => {
    count += req.body.count;
    res.send(count);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});