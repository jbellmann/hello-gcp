#!/usr/bin/env bash


PROJECT_ID=sigma-example
BASE_DIR=$(pwd)
echo $BASE_DIR

USERS_BASE_DIR=$BASE_DIR/users
FRONTEND_BASE_DIR=$BASE_DIR/frontend
GATEWAY_BASE_DIR=$BASE_DIR/hello-gcp-gateway

cd $USERS_BASE_DIR
echo $(pwd)
./mvnw clean install

cd $BASE_DIR
echo $(pwd)

cd $FRONTEND_BASE_DIR
echo $(pwd)
npm run prepare-docker

cd $BASE_DIR
echo $(pwd)

cd $GATEWAY_BASE_DIR
echo $(pwd)
./mvnw clean install

cd $BASE_DIR
echo $(pwd)

cd $USERS_BASE_DIR/target/docker
docker build -t gcr.io/$PROJECT_ID/hello-gcp-users .

cd $BASE_DIR
echo $(pwd)

cd $FRONTEND_BASE_DIR/docker
docker build -t gcr.io/$PROJECT_ID/hello-gcp-frontend .

cd $BASE_DIR
echo $(pwd)

cd $GATEWAY_BASE_DIR/target/docker
docker build -t gcr.io/$PROJECT_ID/hello-gcp-gateway .
