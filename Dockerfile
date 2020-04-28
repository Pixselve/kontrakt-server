FROM node:latest

ENV DATABASE_URL "postgresql://postgres:bC8rBtfyJoNCfeCE@35.205.60.245:5432/kontrakt?schema=public"

RUN mkdir -p /usr/src/app
COPY package*.json /usr/src/app/

RUN cd /usr/src/app/; npm install
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm run build

CMD [ "npm", "run", "start" ]

EXPOSE 8080
