# Stage 1: builder
FROM node:11-alpine as builder

RUN apk add --update unzip
ADD https://github.com/PracticaDS/pdes-tp-anonymous/archive/master.zip /tmp
RUN unzip -d /tmp /tmp/master.zip
RUN mv /tmp/pdes-tp-anonymous-master/back /app

WORKDIR /app

ENV PORT 8080
ENV NODE_ENV production
RUN yarn install --prod

# Stage 2: publish
FROM node:11-alpine

WORKDIR /app
COPY --from=builder /app /app
EXPOSE 8080
CMD [ "yarn", "start" ]
