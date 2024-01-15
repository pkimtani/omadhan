#############################################
FROM node:20.10.0-alpine as installer

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install
#############################################

#############################################
FROM node:20.10.0-alpine as runner

WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=installer /app/node_modules ./node_modules

RUN npm install -g nx

COPY . .

CMD [ "nx", "serve", "api" ]
