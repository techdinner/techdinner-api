FROM node:16.16.0

WORKDIR /app

COPY package*.json ./
COPY yarn* ./

RUN npm install yarn

RUN yarn install --frozen-lockfile

COPY . .

CMD [ "yarn", "start" ]