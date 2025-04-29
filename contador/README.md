# Instruções

Criar rede que irá conectar o mysql com a api.
```bash
docker network create --driver bridge rede-contador
```

Comando para iniciar o container do banco de dados "mysql-contador".
```bash
docker run -d -p 3306:3306 --network rede-contador --name mysql-contador elguesabal/mysql-contador:1.0
```

Comando para iniciar a api.
```bash
docker run -d -p 4242:4242 --network rede-contador --name api-contador elguesabal/api-contador:1.1
```

Comando para iniciar o site.
```bash
docker run -d -p 5173:5173 --name site-contador elguesabal/site-contador:1.0
```