ENVIRONMENT_FILE=.env

default: run

run:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- yarn build
	- docker-compose up -d --build
endif

clean:
	- rm -r ./build
	- rm -r ./node_modules
	- docker-compose down
	- docker rmi techdinner-node

start:
	- docker-compose start

stop:
	- docker-compose stop

restart:
	- docker-compose restart

status:
	- docker-compose ps

bash:
	- docker exec -it techdinner-api bash

deploy:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose down
	- yarn build
	- docker-compose up -d
endif
