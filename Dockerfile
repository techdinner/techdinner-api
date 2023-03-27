FROM node:18.15.0-slim

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN yarn install

CMD [ "yarn", "dev" ]
