FROM node:latest

RUN mkdir -p /usr/src/app
COPY . /usr/src/app

RUN cd /usr/src/app/; npm install
WORKDIR /usr/src/app


RUN npm run build

CMD [ "npm", "run", "start" ]

EXPOSE 8080
