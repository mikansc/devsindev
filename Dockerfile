FROM node:lts-alpine

ENV HOME=/app
WORKDIR $HOME

COPY package.json ./
RUN npm install

EXPOSE 3000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

CMD /wait && npm start