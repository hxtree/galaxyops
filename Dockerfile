
FROM node:16.13.1-buster as base

RUN npm install -g pnpm

# EXPOSE 8000

WORKDIR /usr/src/app

# Development

FROM base as development

RUN pnpm --global install typescript @microsoft/rush aws-cdk

# Standard

FROM base as standard

# COPY . /app 
COPY package.json /usr/src/app 
COPY yarn.lock /usr/src/app

