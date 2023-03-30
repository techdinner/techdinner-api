ENVIRONMENT_FILE=.env

default: run

# DEV COMMANDS
install:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose up -d --build
endif

run:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose up -d --build
	- docker-compose exec techdinner-api yarn start
endif

clean:
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
	- docker-compose exec -it techdinner-api bash

migrate:
	- docker-compose exec techdinner-api yarn migration:run

# PROD COMMANDS
install-prod:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- yarn build
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml up -d --build
endif

run-prod:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- yarn build
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml up -d --build
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml exec techdinner-api yarn start
endif

clean-prod:
	- rm -r ./dist
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml down
	- docker rmi techdinner-node

start-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml start

stop-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml stop

restart-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml restart

status-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml status

bash-prod:
	- docker-compose --env-file ./.env -f .docker/docker-compose.prod.yml exec -it techdinner-api bash

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
