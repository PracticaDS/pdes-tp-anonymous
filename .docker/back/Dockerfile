# Stage 1: pull
FROM alpine/git as pull
WORKDIR /app
RUN git clone https://github.com/PracticaDS/pdes-tp-anonymous.git /app
WORKDIR /app/back


# Stage 2: install & publish
FROM node:11

WORKDIR /app
COPY --from=pull /app/back/ /app

ENV PORT 8080
ENV NODE_ENV=production
RUN yarn install --prod

EXPOSE 8080
CMD [ "yarn", "start" ]
