# 🐳 Estudando Docker

Este repositório é o meu diário de estudos sobre Docker. Aqui registro os comandos que aprendi, explicações e exemplos práticos. A ideia é manter tudo organizado para revisão e consulta futura.

---

## [Docker Hub](https://hub.docker.com/u/elguesabal)

| Projeto | Descrição | Código fonte GitHub | Repositório Docker Hub |
| - | - | - | - |
| ft_irc | A imagem roda um servidor IRC em C++. | [/elguesabal/docker/ft_irc](https://github.com/elguesabal/Docker/tree/main/ft_irc) | [elguesabal/ft_irc](https://hub.docker.com/repository/docker/elguesabal/ft_irc/general) |
| contador | A API conta quantas vezes foi acessada a cada requisição. O site faz requisições para essa API e exibe o número de acessos. | [/elguesabal/docker/contador](https://github.com/elguesabal/Docker/tree/main/contador) | [elguesabal/mysql-contador](https://hub.docker.com/repository/docker/elguesabal/mysql-contador/general) <br> [elguesabal/api-contador](https://hub.docker.com/repository/docker/elguesabal/api-contador/general) <br> [site-contador](https://hub.docker.com/repository/docker/elguesabal/site-contador/general) |

---

## 📦 Comandos que já aprendi

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

Executa o container usando diretamente a rede do host, sem isolamento de rede.
```bash
docker run --network host dockersamples/static-site
```

Cria um container sem acesso a internet.
```bash
docker run --network none ubuntu
```

Com a flag "-e" é possível passar uma variável de ambiente.
```bash
docker run -e VARIAVEL="vampeta" ubuntu
```

Cria um armazenamento persistente fora do container.
```bash
docker run -v <diretorio> ubuntu
```

Cria um armazenamento persistente no host e outro no container usando os caminhos especificados.
```bash
docker run -v <diretório_do_host>:<diretório_do_container> ubuntu
```

Cria um volume ou usa o já existente e define o diretório do container.
```bash
docker run -v <nome_do_volume>:<diretório_do_container> ubuntu
```

Cria um armazenamento persistente no host e outro no container usando os caminhos especificados (a diferenca é que ocorre um erro se o diretório do host não existir).
```bash
docker run --mount type=bind,source=<diretório_do_host>,target=<diretório_do_container> ubuntu
```

Usa um volume já existente e caso não exista o Docker cria um volume com esse nome.
```bash
docker run --mount source=<nome_do_volume>,target=<diretório_do_container> ubuntu
```

Cria um diretório dentro do container que qualquer coisa armazenada dentro da memória RAM, ou seja, ao parar o container os dados se perdem.
```bash
docker run --tmpfs=<diretório> ubuntu
```

Cria um diretório dentro do container que qualquer coisa armazenada dentro da memória RAM, ou seja, ao parar o container os dados se perdem.
```bash
docker run --mount type=tmpfs,destination=<diretório> ubuntu
```

Cria e conecta um container a uma rede brigde específica.
```bash
docker run --network <nome_da_rede> ubuntu
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

### docker build
Cria uma imagem com base em um Dockerfile.
```bash
docker build -t <nome_da_imagem>:<tag> <caminho_do_contexto>
```

Faz o build de um projeto com arquivos .dockerfile.
```bash
docker build -t <nome_da_imagem>:<tag> -f <arquivo_dockerfile>.dockerfile .
```

Define um argumento no momento do build.
```bash
docker build -t <nome_da_imagem>:<tag> --build-arg <variável>=<valor> -f <arquivo_dockerfile>.dockerfile .
```

### docker tag
Atribui uma nova tag a uma imagem já existente.
```bash
docker tag <nome_da_imagem>:<tag> <nome_da_imagem>:latest
```

### docker push
Sobe uma imagem pronta localmente, semelhante ao comando push do git.
```bash
docker push <nome_da_imagem>:<tag>
```

### docker volume
Cria um volume de armazenamento.
```bash
docker volume create <nome_do_volume>
```

Lista todos os volumes.
```bash
docker volume ls
```

Remove um volume.
```bash
docker volume rm <nome_do_volume>
```

### docker inspect
Mostra informações sobre o container.
```bash
docker inspect <nome_do_container>
```

### docker network
Lista todas as redes que existem no Docker.
```bash
docker network ls
```

Mostra com detalhes informações da rede bridge dos containers.
```bash
docker network inspect bridge
```

Cria uma rede brigde que fica visível a outros containers.
```bash
docker network create --driver brigde <nome_da_rede>
```

Remove uma rede bridge.
```bash
docker network rm <nome_da_rede>
```

Desconecta o container de uma rede brigde.
```bash
docker network disconnect bridge <nome_do_container>
```

Conecta um container a uma rede brigde.
```bash
docker network connect <nome_da_rede> <nome_do_container>
```

### docker compose
Constrói e executa os containers conforme descrito no arquivo ```docker-compose.yml```.
```bash
docker compose up
```

Também pode ser usado a flag ```--build``` para forçar o build e ```-d``` para executar os containers em segundo plano.
```bash
docker compose up --build -d
```

Adicionando a flag ```--rm``` o container é excluido assim que sua execução terminar.
```bash
docker compose run --rm
```

Lista containers em execução, mostrando uma coluna extra com o nome do serviço.
```bash
docker compose ls
```

Para todos os containers sem remover.
```bash
docker compose stop
```

Para e remove todos os containers e redes criadas.
```bash
docker compose down
```