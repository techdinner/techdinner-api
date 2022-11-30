FROM node:16.17.0-slim

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN yarn install && \
    yarn build

CMD [ "yarn", "start" ]

EXPOSE 5000
