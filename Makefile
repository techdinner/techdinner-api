ENVIRONMENT_FILE=.env

default: run

install:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose up -d --build
endif

install-prod:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- yarn build
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml up -d --build
endif

run:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose up -d --build
	- docker-compose exec techdinner-api yarn start
endif

run-prod:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- yarn build
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml up -d --build
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml exec techdinner-api yarn start
endif

clean:
	- docker-compose down
	- docker rmi techdinner-node

clean-prod:
	- rm -r ./dist
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml down
	- docker rmi techdinner-node

start:
	- docker-compose start

start-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml start

stop:
	- docker-compose stop

stop-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml stop

restart:
	- docker-compose restart

restart-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml restart

status:
	- docker-compose ps

status-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml status

bash:
	- docker-compose exec -it techdinner-api bash

bash-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml exec -it techdinner-api bash

migrate:
	- docker-compose exec techdinner-api yarn migration:run

migrate-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml exec techdinner-api yarn migration:run

deploy:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose down
	- yarn build
	- docker-compose up -d
endif
