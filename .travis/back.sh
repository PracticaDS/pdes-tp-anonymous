#!/bin/env/bash

pushd back
yarn lint
yarn coveralls
popd
