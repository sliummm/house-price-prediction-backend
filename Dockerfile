FROM node:latest
LABEL author="Shu Liu"

ENV PORT=3000

COPY . /var/express
WORKDIR /var/express
VOLUME ["/var/express"]

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm","start"]