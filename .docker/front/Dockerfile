# Stage 1: builder
FROM node:11-alpine as builder

RUN apk add --update unzip
ADD https://github.com/PracticaDS/pdes-tp-anonymous/archive/master.zip /tmp
RUN unzip -d /tmp /tmp/master.zip
RUN mv /tmp/pdes-tp-anonymous-master/front /app

WORKDIR /app
RUN yarn install

ARG API_HOST
ARG API_PORT
ENV REACT_APP_API_HOST ${API_HOST}
ENV REACT_APP_API_PORT ${API_PORT}
RUN yarn build

# Stage 2: publish
FROM nginx:1.17-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html
