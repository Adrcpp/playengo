
# RUN

```sh

docker build . -t playengo
docker run --name playengo -p 4200:4200 playengo -v ${PWD}/playengo:/playengo

```
