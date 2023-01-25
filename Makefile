ENVIRONMENT_FILE=.env

default: run

install:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- yarn build
	- docker-compose up -d --build
endif

install-dev:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml up -d --build
endif

run:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- yarn build
	- docker-compose up -d --build
	- docker-compose exec techdinner-api yarn start
endif

run-dev:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml up -d --build
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml exec techdinner-api yarn dev
endif

clean:
	- rm -r ./dist
	- docker-compose down
	- docker rmi techdinner-node

clean-dev:
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml down
	- docker rmi techdinner-node

start:
	- docker-compose start

start-dev:
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml start

stop:
	- docker-compose stop

stop-dev:
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml stop

restart:
	- docker-compose restart

restart-dev:
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml restart

status:
	- docker-compose ps

status-dev:
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml status

bash:
	- docker-compose exec -it techdinner-api bash

bash-dev:
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml exec -it techdinner-api bash

migrate:
	- docker-compose exec techdinner-api yarn migration:run

migrate-dev:
	- docker-compose --env-file ./.env -f docker/docker-compose.dev.yml exec techdinner-api yarn migration:run

deploy:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose down
	- yarn build
	- docker-compose up -d
endif
