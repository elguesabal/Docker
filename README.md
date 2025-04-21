# 🐳 Estudando Docker

Este repositório é o meu diário de estudos sobre Docker. Aqui registro os comandos que aprendi, explicações e exemplos práticos. A ideia é manter tudo organizado para revisão e consulta futura.

---

## 📦 Comandos que já aprendi

### `docker ps`

### docker status

Verifica se o serviço do Docker está rodando.
```bash
sudo service docker status
```

### docker ps
Lista os containers em execução.
```bash
docker ps
```

Lista todos os containers, inclusive os que estão parados.
```bash
docker ps -a
```

### docker images
Mostra todas as imagens baixadas localmente.
```bash
docker images
```

Mostra todos os ids de todas as imagens localmente.
```bash
docker images -q
```

### docker rm
Remove containers parados.
```bash
docker rm <nome_ou_id_do_container>
```

Para e exclui um container.
```bash
docker rm -f <nome_ou_id_do_container>
```

### docker rmi
Remove imagens do Docker.
```bash
docker rmi <nome_ou_id_da_imagem>
```

### docker run
Cria e executa um novo container a partir de uma imagem.
```bash
docker run <opções> <imagem>
```

Baixa ou roda um container com base em uma imagem.
```bash
docker run ubuntu
```

Roda um comando dentro de um container.
```bash
docker run ubuntu echo teste
```

Abre no modo interativo.
```bash
docker run -it ubuntu bash
```

Cria um container com um nome específico.
```bash
docker run --name <nome_do_container> ubuntu
```

Roda um container em segundo plano.
```bash
docker run -d ubuntu
```

### docker exec
Envia comandos para serem rodados em containers que estão em segundo plano.
```bash
docker exec <id_do_container> <comando>
```

### docker stop
Para a execução de um container.
```bash
docker stop <nome_ou_id_do_container>
```

### docker start
Inicia novamente um container parado.
```bash
docker start -a <nome_ou_id_do_container>
```




### docker container
Lista containers em execução.
```bash
docker container ls
```

Lista todos os containers.
```bash
docker container ls -a
```

Cria e inicia um container.
```bash
docker container run <opções> <imagem>
```

Para um container.
```bash
docker container stop <nome_ou_id_do_container>
```

Remove um container.
```bash
docker container rm <nome_ou_id_do_container>
```

Mostra detalhes técnicos de um container.
```bash
docker container inspect <nome_ou_id_do_container>
```

Executa um comando dentro de um container.
```bash
docker container exec <nome_ou_id_do_container>
```

Remove todos os containers parados
```bash
docker container prune
```