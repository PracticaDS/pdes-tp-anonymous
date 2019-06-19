#!/bin/bash

if [ "${TRAVIS_BRANCH}" = "master" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    echo "*** Building Docker Containers ***"
    docker build -t pdesanonymous/api .docker/back/
    docker build -t pdesanonymous/web --build-arg REACT_APP_API_HOST=api --build-arg REACT_APP_API_PORT=8080 .docker/front/

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
