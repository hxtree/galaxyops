# syntax=docker/dockerfile:1
################################################################################
#                                     Base                                     #
################################################################################
# https://hub.docker.com/_/node
# https://github.com/nodejs/release#nodejs-release-working-group
FROM node:gallium-buster as base

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC
ENV HOME /home/node

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

# install tools
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
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
    # install latest npm
    && npm install --global npm@9.2.0 \
    # https://pnpm.io/installation
    && npm install --global pnpm@7.26.3 \
    # install Microsoft Rush globally
    # https://rushjs.io/
    && npm install --global @microsoft/rush@5.88.0 \
    # install AWS CDK globally
    # https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html
    && npm install --global aws-cdk@2.63.1 \
    # install typescript globally (perhaps this should be moved for rush's package)
    && npm install --global typescript \
    # install typescript globally (perhaps this could be moved to local)
    && npm install --global typedocs \
    # install AWS Organization Formation
    # https://github.com/org-formation/org-formation-cli
    && npm install --global aws-organization-formation \
    # install dependency check
    # https://www.npmjs.com/package/depcheck
    && npm install --global depcheck \
    # install nestjs/cli globally (used to run nest services locally)
    # https://docs.nestjs.com/first-steps
    && npm install --global @nestjs/cli \
    # install esbuild
    # https://esbuild.github.io/getting-started/#install-esbuild
    # && npm install --global esbuild \
    # install openapi generator for generating microservice contracts
    # https://openapi-generator.tech
    && npm install --global @openapitools/openapi-generator-cli \
    # install prettier globally
    # https://rushjs.io/pages/maintainer/enabling_prettier/
    && npm install --global prettier \
    && npm install --global pretty-quick \
    # install git-conventional-commits
    && npm install --global git-conventional-commits

################################################################################
#                                  Test Base                                   #
################################################################################
FROM base AS test
ARG USER=node

COPY . /usr/src/app

RUN chown -R $USER /usr/src/app \
    && install -d -m 0755 -o $USER /home/$USER/.rush \
    && install -d -m 0755 -o $USER /usr/src/app/common/temp \
    && git config --global --add safe.directory /usr/src/app

USER $USER

WORKDIR /usr/src/app

RUN rush install

SHELL ["/bin/bash", "-c"]

################################################################################
#                               Development Base                               #
################################################################################
FROM base AS development
ARG UID=1000
ARG USER=node

ENV AWS_SDK_LOAD_CONFIG=1
ENV STAGE=default

RUN apt-get install -y --no-install-recommends \
    sudo \
    zsh \
    vim

#RUN adduser --home /home/$USER --shell /bin/zsh $USER \
RUN usermod -aG sudo $USER \
    && passwd -d $USER  \
    && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >>/etc/sudoers \
    && chown -R $USER /usr/src/app \
    && install -d -m 0755 -o $USER /home/$USER/.rush \
    && install -d -m 0755 -o $USER /usr/src/app/common/temp \
    && install -d -m 0755 -o $USER /home/$USER/.vscode-server/extensions

# install AWS Command Line Interface
# https://awscli.amazonaws.com/v2/documentation/api/latest/index.html
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && chmod +x ./aws/install \
    && ./aws/install -i /usr/local/aws-cli -b /usr/local/bin

# rush tab completion
# https://rushjs.io/pages/developer/tab_completion/
RUN touch /home/$USER/.zshrc \
    && echo "# bash parameter completion for the Rush CLI" >>/home/$USER/.zshrc \
    && echo "_rush_bash_complete()" >>/home/$USER/.zshrc \
    && echo "{" >>/home/$USER/.zshrc \
    && echo "  local word=\${COMP_WORDS[COMP_CWORD]}" >>/home/$USER/.zshrc \
    && echo "" >>/home/$USER/.zshrc \
    && echo "  local completions" >>/home/$USER/.zshrc \
    && echo "  completions=\"\$(rush tab-complete --position \"\${COMP_POINT}\" --word \"\${COMP_LINE}\" 2>/dev/null)\"" >>/home/$USER/.zshrc \
    && echo "  if [ \$? -ne 0 ]; then" >>/home/$USER/.zshrc \
    && echo "    completions=\"\"" >>/home/$USER/.zshrc \
    && echo "  fi" >>/home/$USER/.zshrc \
    && echo "" >>/home/$USER/.zshrc \
    && echo "  COMPREPLY=( \$(compgen -W \"\$completions\" -- \"\$word\") )" >>/home/$USER/.zshrc \
    && echo "}" >>/home/$USER/.zshrc \
    && echo "complete -f -F _rush_bash_complete rush" >>/home/$USER/.zshrc \
    # ohmyzsh to show git branch
    && sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Add alias
RUN echo "alias app=\"cd /usr/src/app\"" >>/home/$USER/.zshrc

RUN chown -R $USER /home/$USER

USER $USER

# git credentials https://github.com/microsoft/vscode-remote-release/issues/720#issuecomment-503492715
ENV HOME /home/$USER

# pnpm exec esbuild requires this for to access esbuild global
# CDK NodeJsFunction requires esbuild to be installed globally due to the deps lock file being root
ENV PNPM_HOME=/usr/local/sbin

SHELL ["/bin/zsh", "-c"]
