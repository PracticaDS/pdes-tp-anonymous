#!/bin/env/bash

pushd front
yarn lint
yarn coveralls
if [ $TRAVIS_BRANCH == 'master' ]; then
    yarn build
    mv build ../
fi
popd
