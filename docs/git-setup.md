# Git Setup

Commits should be made using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

The VSCode devcontainer and Conventional Commits extension installed by default make this easy to configure. The following procedures will help generate a SSH credientals if authentication is necessary and store key on a persistant volume.


1. create SSH key and add SSH public key to your [Github SSH Keys](https://github.com/settings/ssh/new)

    ```
    sudo ssh-keygen -o -N '' -f ~/github-ssh-key/github.com
    cat ~/github-ssh-key/github.com.pub
    ```   

A `~/.ssh/config` is copied to the container at build time that auto detects the SSH key from within the devcontainer. The key is stored on a volume mount making this a one time process that persist between builds.
