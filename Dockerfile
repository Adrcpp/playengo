FROM node:alpine

RUN npm install -g @angular/cli

COPY ./playengo/package.json /playengo/

WORKDIR /playengo

COPY ./playengo/. /playengo

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
