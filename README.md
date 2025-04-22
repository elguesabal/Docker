# 🐳 Estudando Docker

Este repositório é o meu diário de estudos sobre Docker. Aqui registro os comandos que aprendi, explicações e exemplos práticos. A ideia é manter tudo organizado para revisão e consulta futura.

---

## 📦 Comandos que já aprendi


### docker status
Verifica se o serviço do Docker está rodando.
```bash
sudo service docker status
```

### docker pull
```bash
docker pull <nome_da_imagem>
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

Roda um container abrindo uma porta aleatória acessível pelo localhost fora do container.
```bash
docker run -P -d dockersamples/static-site
```

Roda um container abrindo a porta 3000 (e redireciona para a porta 80 internamente) acessível pelo localhost fora do container.
```bash
docker run -p 3000:80 -d dockersamples/static-site
```

Com a flag "-e" é possível passar uma variável de ambiente.
```bash
docker run -e VARIAVEL="vampeta" ubuntu
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

### docker exec
Envia comandos para serem rodados em containers que estão em segundo plano.
```bash
docker exec <nome_ou_id_do_container> <comando>
```

### docker attach
Assume o controle de um terminal de um container iniciado com a flag "-dit".
```bash
docker attach <nome_ou_id_do_container>
```

### docker stop
Para a execução de um container em 10 segundos.
```bash
docker stop <nome_ou_id_do_container>
```

Para o container com um determinado delay.
```bash
docker stop -t <segundos> <nome_ou_id_do_container>
```

### docker kill
Para a execução de um container imediatamente.
```bash
docker kill <nome_ou_id_do_container>
```

### docker start
Inicia novamente um container parado.
```bash
docker start -a <nome_ou_id_do_container>
```

### docker create
Cria um conteiner sem iniciar.
```bash
docker create ubuntu
```

### docker pause
Pausa um container em execução.
```bash
docker pause <nome_ou_id_do_container>
```

### docker unpause
Continua a execução de um container pausado.
```bash
docker unpause <nome_ou_id_do_container>
```

### docker restart
Reinicia os processos de um container.
```bash
docker restart <nome_ou_id_do_container>
```

### docker rename
Muda o nome de um container.
```bash
docker rename <nome_antigo_do_container> <novo_nome_do_container>
```

### docker port
Mostra quais portas estão abertas e a quais protocolos estão relacionadas.
```bash
docker port <nome_ou_id_do_container>
```

### docker history
Mostra o histórico de camadas da imagem.
```bash
docker history <nome_da_imagem>
```

### docker commit
Salva o estado atual do conteiner em uma nova imagem.
```bash
docker commit <nome_ou_id_do_container> <nome_do_commit>
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