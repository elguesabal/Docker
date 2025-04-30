const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 4242;

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
	host: "mysql-contador",
	user: "root",
	password: "vampeta",
	database: "count"
});

connection.connect((error) => {
	if (error) {
		console.error("Banco de dados não conectado. Reiniciando...");
		process.exit(1);
	}
	console.log("Conectado ao banco de dados");
	app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
});

function getN() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT n FROM count LIMIT 1", (err, result) => {
            if (err) reject(null);
            resolve(result[0].n);
        });
    });
}

async function setN(increment) {
    const n = await getN();

    return new Promise((resolve, reject) => {
        connection.query(`UPDATE count SET n = ${n + increment} WHERE n = ${n}`, (err, result) => {
            if (err) reject(null);
            resolve(n + increment);
        });
    });
}

app.get("/count", async (req, res) => {
    const n = await getN();

    if (n == null) res.send("Error");
    else res.send(n);
});

app.post("/count", async (req, res) => {
    const n = await setN(req.body.count);

    if (n == null) res.send("Error");
    else res.send(n);
});