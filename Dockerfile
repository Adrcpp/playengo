FROM node:alpine

RUN npm install -g @angular/cli
RUN ng new playengo

WORKDIR /playengo

# RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]