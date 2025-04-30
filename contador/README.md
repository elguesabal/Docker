# Build manual

Dentro do diretório do projeto execute os comandos abaixo:

Build do banco de dados mysql.
```bash
docker -t mysql-contador -f mysql-contador.dockerfile .
```

Build da api que vai conectar o banco de dados e o site.
```bash
docker -t api-contador -f api-contador.dockerfile .
```

Build do site.
```bash
docker -t site-contador -f site-contador.dockerfile .
```

Cria a rede que irá conectar o mysql com a api.
```bash
docker network create --driver bridge rede-contador
```

Comando para iniciar o container do banco de dados "mysql-contador".
```bash
docker run -d -p 3306:3306 --network rede-contador --name mysql-contador mysql-contador
```

Comando para iniciar a api.
```bash
docker run -d -p 4242:4242 --network rede-contador --name api-contador api-contador
```

Comando para iniciar o site.
```bash
docker run -d -p 5173:5173 --name site-contador site-contador
```

---

# Docker compose

Usando o docker compose execute o comando abaixo para fazer o build e criar o container.
```bash
docker compose up --build -d
```

---

# Script

Também é possível executar o arquivo ```script.sh``` e ele já irá baixar e rodar as imagens.