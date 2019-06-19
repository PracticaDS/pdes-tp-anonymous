# Stage 1: pull
FROM alpine/git as pull
WORKDIR /app
RUN git clone https://github.com/PracticaDS/pdes-tp-anonymous.git /app
WORKDIR /app/front


# Stage 2: build
FROM node:11-slim as build
WORKDIR /app
COPY --from=pull /app/front /app
RUN yarn install

ARG API_HOST
ARG API_PORT
ENV REACT_APP_API_HOST ${API_HOST}
ENV REACT_APP_API_PORT ${API_PORT}
RUN yarn build


# Stage 3: publish
FROM nginx:1.17-alpine
COPY --from=build /app/build/ /usr/share/nginx/html
