#!/bin/bash

echo $TRAVIS_BRANCH
if [ "${TRAVIS_BRANCH}" = "master" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
    echo "162.243.162.94 ecdsa-sha2-nistp256 $SERVER_KEY" >> ~/.ssh/known_hosts
    ssh forge@162.243.162.94 '/home/forge/pdes-tp-anonymous-deploy.sh'
else
    echo "Not deploying, since this branch isn't master."
fi
