
FROM node:16.13.1-buster as base

# RUN yarn install 

# EXPOSE 8000

WORKDIR /usr/src/app

# Development

FROM base as development


# Standard

FROM base as standard

# COPY . /app 
COPY package.json /usr/src/app 
COPY yarn.lock /usr/src/app

