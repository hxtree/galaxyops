# syntax=docker/dockerfile:1
################################################################################
#                                     Base                                     #
################################################################################
# https://hub.docker.com/_/node
# https://github.com/nodejs/release#nodejs-release-working-group
FROM node:gallium-buster as base

ARG USER=node
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

# install tools
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        zsh \
        tzdata \
        build-essential \
        curl \
        zip \
        unzip \
        less \
        jq \
        npm \
        default-jre \
    # install latest npm
    && npm install --global npm@9.2.0 \
    # https://pnpm.io/installation
    && npm install --global pnpm@7.18.2 \
    # install Microsoft Rush globally
    # https://rushjs.io/
    && npm install --global @microsoft/rush@5.79.0 \
    # install AWS CDK globally
    # https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html
    && npm install --global aws-cdk@2.56.0 \
    # install typescript globally (perhaps this should be moved for rush's package)
    && npm install --global typescript \
    # install typescript globally (perhaps this could be moved to local)
    && npm install --global typedocs \
    # install AWS Organization Formation
    # https://github.com/org-formation/org-formation-cli
    && npm install --global aws-organization-formation \
    # install nestjs/cli globally (used to run nest services locally)
    # https://docs.nestjs.com/first-steps
    && npm install --global @nestjs/cli \
    # install esbuild
    # https://esbuild.github.io/getting-started/#install-esbuild
    && npm install esbuild \
    # install openapi generator for generating microservice contracts
    # https://openapi-generator.tech
    && npm install --global @openapitools/openapi-generator-cli \
    # install prettier globally
    # https://rushjs.io/pages/maintainer/enabling_prettier/
    && npm install --global prettier \
    && npm install --global pretty-quick \
    # npm install --global git-conventional-commits
    && npm install --global git-conventional-commits

RUN chown -R $USER /usr/src/app \
    && mkdir -p /home/$USER/.rush \
    && chown -R $USER /home/$USER/.rush \
    && mkdir -p /usr/src/app/common/temp \
    && chown -R $USER /usr/src/app/common/temp

################################################################################
#                                  Test Base                                   #
################################################################################
FROM base AS test
ARG USER=node
USER $USER

SHELL ["/bin/bash", "-c"]

################################################################################
#                               Development Base                               #
################################################################################
FROM base AS development
ARG UID=1000
ARG USER=node

# install AWS Command Line Interface
# https://awscli.amazonaws.com/v2/documentation/api/latest/index.html
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && chmod +x ./aws/install \
    && ./aws/install -i /usr/local/aws-cli -b /usr/local/bin

RUN apt-get install -y sudo --no-install-recommends \
    vim \
    # add to sudo group, remove need to use password
    && usermod -aG sudo $USER \
    && passwd -d $USER  \
    && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >>/etc/sudoers \
    # make directory for VS Code extensions
    && mkdir -p /home/$USER/.vscode-server/extensions \
    && chown -R $USER /home/$USER/.vscode-server \
    && chown -R $USER /home/$USER/.zshrc

# rush tab completion
# https://rushjs.io/pages/developer/tab_completion/
RUN echo "# bash parameter completion for the Rush CLI" >>/home/node/.zshrc \
    && echo "_rush_bash_complete()" >>/home/node/.zshrc \
    && echo "{" >>/home/node/.zshrc \
    && echo "  local word=\${COMP_WORDS[COMP_CWORD]}" >>/home/node/.zshrc \
    && echo "" >>/home/node/.zshrc \
    && echo "  local completions" >>/home/node/.zshrc \
    && echo "  completions=\"\$(rush tab-complete --position \"\${COMP_POINT}\" --word \"\${COMP_LINE}\" 2>/dev/null)\"" >>/home/node/.zshrc \
    && echo "  if [ \$? -ne 0 ]; then" >>/home/node/.zshrc \
    && echo "    completions=\"\"" >>/home/node/.zshrc \
    && echo "  fi" >>/home/node/.zshrc \
    && echo "" >>/home/node/.zshrc \
    && echo "  COMPREPLY=( \$(compgen -W \"\$completions\" -- \"\$word\") )" >>/home/node/.zshrc \
    && echo "}" >>/home/node/.zshrc \
    && echo "complete -f -F _rush_bash_complete rush" >>/home/node/.zshrc \
    # Powerlevel10K
    && git clone --depth=1 https://github.com/romkatv/powerlevel10k.git /home/node/powerlevel10k \
    && echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >> /home/node/.zshrc

# Add alias
RUN echo "alias app=\"cd /usr/src/app\"" >>/home/node/.zshrc

COPY .devcontainer/.ssh/config /home/$USER/.ssh/config
RUN chown -R $USER /home/$USER/.ssh

USER $USER

SHELL ["/bin/zsh", "-c"]
