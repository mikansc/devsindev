FROM node:lts-alpine

ENV HOME=/app
WORKDIR $HOME

COPY package.json ./
RUN npm install

EXPOSE 3000

CMD npm start