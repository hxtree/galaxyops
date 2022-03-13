# syntax=docker/dockerfile:1
################################################################################
#                                     Base                                     #
################################################################################
FROM ubuntu:focal AS base

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    tzdata \ 
    build-essential \
    curl \
    zip \
    unzip && \
    # install node:14.18.2
    # https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/    
    curl --silent --location https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs npm && \
    # install Microsoft Rush globally
    # https://rushjs.io/
    npm install --global @microsoft/rush && \
    # install AWS CDK globally
    # https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html
    npm install --global aws-cdk && \
    # TODO should typescript go here? as we're using rush
    npm install --global typescript && \
    # install AWS Organization Formation
    # https://github.com/org-formation/org-formation-cli
    npm install --global aws-organization-formation && \
    # install AWS Command Line Interface
    # https://awscli.amazonaws.com/v2/documentation/api/latest/index.html
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    chmod +x ./aws/install && \
    ./aws/install -i /usr/local/aws-cli -b /usr/local/bin && \
    mkdir /usr/src/app

WORKDIR /usr/src/app

################################################################################
#                               Development Base                               #
################################################################################
FROM base AS development
ARG UID=1000
ARG USER=ubuntu

RUN apt-get install -y sudo && \
    # create $USER, add to sudo group, remove need to use password
    useradd -rm -s /bin/bash -g root -G sudo -u $UID $USER && \
    passwd -d $USER && \
    echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    chown -R $USER /usr/src/app && \
    # make directory for VS Code extensions
    mkdir -p /home/$USER/.vscode-server/extensions && \
    chown -R $USER /home/$USER/.vscode-server && \
    mkdir -p /home/$USER/.rush && \
    chown -R $USER /home/$USER/.rush && \
    mkdir -p /usr/src/app/common/temp && \
    chown -R $USER /usr/src/app/common/temp && \
    # install requirements for pipx
    apt-get install -y software-properties-common && \
    add-apt-repository ppa:deadsnakes/nightly && \
    apt-get update && \
    apt-get install -y python3.8 python3-pip python3.8-venv vim git

# $USER based installations
USER $USER

RUN python3 -m pip install --user pipx && \
    python3 -m pipx ensurepath && \
    # install AWS SSO
    python3 -m pipx install aws-sso-credential-process && \
    python3 -m pipx install aws-export-credentials && \
    # install CloudFormations linter
    python3 -m pipx install cfn-lint && \
    # add AWS SSO cmd
    echo 'sso(){' >> /home/$USER/.bashrc && \
    echo ' unset AWS_PROFILE' >> /home/$USER/.bashrc && \
    echo ' export AWS_PROFILE=$1' >> /home/$USER/.bashrc && \
    echo ' aws sts get-caller-identity &> /dev/null || aws sso login || (unset AWS_PROFILE && aws-configure-sso-profile --profile $1)' >> /home/$USER/.bashrc && \
    echo ' eval $(aws-export-credentials --env-export)' >> /home/$USER/.bashrc && \
    echo '}' >> /home/$USER/.bashrc

SHELL ["/bin/bash", "-c"]
