# Stage 0: "build-stage", to build and compile the frontend
FROM node:11-slim as build-stage

RUN apt update && apt install -y git

WORKDIR /app

RUN git clone https://github.com/PracticaDS/pdes-tp-anonymous.git /app

WORKDIR /app/front

RUN yarn install && yarn build

# Stage 1: build only, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17-alpine

COPY --from=build-stage /app/front/build/ /usr/share/nginx/html
