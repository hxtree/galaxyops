# Git Setup

Commits to source control MUST adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

The VSCode devcontainer and Conventional Commits extension, which is installed by default, automatically configures most of this. 

If authentication is necessary to push, follow these steps to create SSH credientals to gain authorization. 


1. Create SSH key and add SSH public key printed to your [Github SSH Keys](https://github.com/settings/ssh/new)

    ```
    sudo ssh-keygen -o -N '' -f ~/github-ssh-key/github.com
    cat ~/github-ssh-key/github.com.pub
    ```   

2. Verify it works by pushing code.

A `~/.ssh/config` is copied to the container at build time that auto detects the SSH key from within the devcontainer. The SSH key will be stored on a persistant Docker volume, which should enable this to be a one time procedure that persist between builds.
