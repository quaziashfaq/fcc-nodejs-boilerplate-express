# Builder

FROM node:latest as builder


WORKDIR /usr/src/app
COPY package.json ./
RUN npm install

COPY . .
EXPOSE 3000

CMD ["node", "server.js"]
