FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV port=4000

EXPOSE 4000

CMD [ "npm", "start" ]