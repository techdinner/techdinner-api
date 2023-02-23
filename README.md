<p align="center">
  <a href="https://github.com/techdinner/techdinner-api" rel="noopener">
    <img width=400px height=200px src=".github/assets/logo.png">
 </a>
</p>

<h1 align="center">Tech Dinner API</h1>

<p align="center">
  This API was created to TechDinner APP.
</p>

<div align="center">
    <a>
        <img src="https://img.shields.io/badge/node-v16.17.0-brightgreen.svg">
    </a>
    <a href="https://github.com/techdinner/techdinner-api/issues">
        <img src="https://img.shields.io/github/issues/techdinner/techdinner-api">
    </a>
    <a href="https://github.com/techdinner/techdinner-api/pulls">
        <img src="https://img.shields.io/github/issues-pr/techdinner/techdinner-api">
    </a>
</div>

### Requirements
- Node with Yarn (version in [nvmrc](.nvmrc));
- Docker and Docker Compose.

## Installing
Clone this repository
```
git clone https://github.com/techdinner/techdinner-api.git
```

Install dependencies
```
yarn
```

### [Installing in DEV environment](docs/install/development.md)
### [Installing in PROD environment](docs/install/production.md)

## Running the app
### With make commands to use docker
```bash
# production
$ make run-prod

# development
$ make run
```

### Without make commands
```bash
# production
$ yarn start

# development
$ yarn dev
```

[For more commands with makefile check Makefile](Makefile)

## Test
```bash
# unit tests
$ yarn test
```

## Other docs
[features](docs/features.md)
