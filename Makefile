ENVIRONMENT_FILE=.env

default: run

run: check-environment
	- docker-compose up -d --build

start:
	- docker start techdinner-nginx techdinner-api

stop:
	- docker stop techdinner-nginx techdinner-api

restart:
	- docker restart techdinner-nginx techdinner-api

status:
	- docker ps -f name=techdinner-api
	- docker ps -f name=techdinner-nginx

clean:
	- docker stop techdinner-nginx techdinner-api
	- docker rm techdinner-nginx techdinner-api
	- docker rmi techdinner-nodejs

check-environment:
	- @echo Copiando arquivo ".env.example";
ifeq ("$(wildcard $(ENVIRONMENT_FILE))","")
	- cp .env.example .env
	- @echo O arquivo ".env" foi gerado;
else
	- @echo Arquivo ".env" já existe;
endif