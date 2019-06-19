#!/bin/bash

if [ "${TRAVIS_BRANCH}" = "master" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    echo "*** Building Docker Containers ***"
    docker build --no-cache --rm -t pdesanonymous/api .docker/back/
    docker build --no-cache --rm -t pdesanonymous/web --build-arg API_HOST=api.pdes-tp-anonymous.tk --build-arg API_PORT=80 .docker/front/

    echo "*** Pushing Docker Containers ***"
    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
    docker push pdesanonymous/api:latest
    docker push pdesanonymous/web:latest

    echo "*** Deploying on Server ***"
    echo "$SERVER_IP ecdsa-sha2-nistp256 $SERVER_KEY" >> ~/.ssh/known_hosts
    ssh $SERVER_USERNAME@$SERVER_IP "/home/$SERVER_USERNAME/pdes-tp-anonymous-deploy.sh"
else
    echo "Not deploying, since this branch isn't master or it's a Pull Request."
fi
