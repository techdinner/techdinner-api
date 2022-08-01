FROM node:16.16.0-alpine

WORKDIR /app
ENV PORT=3000

COPY package*.json ./
COPY yarn.lock ./

RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn run build && \
    yarn cache clean

COPY . .

EXPOSE $PORT

CMD [ "yarn", "start" ]