# syntax=docker/dockerfile:1
################################################################################
#                                     Base                                     #
################################################################################
# https://hub.docker.com/_/node
# https://github.com/nodejs/release#nodejs-release-working-group
FROM node:gallium-buster as base

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

RUN apt-get update &&
    apt-get install -y --no-install-recommends \
        tzdata \
        build-essential \
        curl \
        zip \
        unzip \
        less \
        jq \
        npm &&
    # install Microsoft Rush globally
    # https://rushjs.io/
    npm install --global @microsoft/rush &&
    # install AWS CDK globally
    # https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html
    npm install --global aws-cdk &&
    # install typescript globally (perhaps this should be moved for rush's package)
    npm install --global typescript &&
    # install typescript globally (perhaps this could be moved to local)
    npm install --global typedocs &&
    # install AWS Organization Formation
    # https://github.com/org-formation/org-formation-cli
    npm install --global aws-organization-formation &&
    # install nestjs/cli
    # https://docs.nestjs.com/first-steps
    npm install --global @nestjs/cli &&
    # install esbuild
    # https://esbuild.github.io/getting-started/#install-esbuild
    npm install esbuild

# install AWS Command Line Interface
# https://awscli.amazonaws.com/v2/documentation/api/latest/index.html
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" &&
    unzip awscliv2.zip &&
    chmod +x ./aws/install &&
    ./aws/install -i /usr/local/aws-cli -b /usr/local/bin &&
    mkdir /usr/src/app

WORKDIR /usr/src/app

################################################################################
#                               Development Base                               #
################################################################################
FROM base AS development
ARG UID=1000
ARG USER=node

RUN apt-get install -y sudo \
    vim &&
    # create $USER, add to sudo group, remove need to use password
    usermod -aG sudo $USER &&
    passwd -d $USER &&
    echo '%sudo ALL=(ALL) NOPASSWD:ALL' >>/etc/sudoers &&
    chown -R $USER /usr/src/app &&
    # make directory for VS Code extensions
    mkdir -p /home/$USER/.vscode-server/extensions &&
    chown -R $USER /home/$USER/.vscode-server &&
    mkdir -p /home/$USER/.rush &&
    chown -R $USER /home/$USER/.rush &&
    mkdir -p /usr/src/app/common/temp &&
    chown -R $USER /usr/src/app/common/temp

# git config --global core.editor "code --wait"

COPY .devcontainer/.ssh/config /home/$USER/.ssh/config
RUN chown -R $USER /home/$USER/.ssh

USER $USER

SHELL ["/bin/bash", "-c"]
