# Installing in DEV environment

## Using container environment
```bash
# copy env file
$ cp .env.example .env

# run makefile command to install
$ make install

# run makefile command to generate migrations
$ make migrate
```

## Without container environment
```bash
# copy env file
$ cp .env.example .env

# run docker-compose to generate database
$ docker-compose up -d --build

# run command to generate migrations
$ yarn migration:run

# run app
$ yarn dev
```

[For more commands with makefile check Makefile](../../Makefile)
