FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=vampeta
COPY mysql-contador/init.sql /docker-entrypoint-initdb.d/