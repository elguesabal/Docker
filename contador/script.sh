#!/bin/bash

docker network create --driver bridge rede-contador
docker run -d -p 3306:3306 --network rede-contador --name mysql-contador elguesabal/mysql-contador:1.0
docker run -d -p 4242:4242 --network rede-contador --name api-contador elguesabal/api-contador:1.1
docker run -d -p 5173:5173 --name site-contador elguesabal/site-contador:1.0