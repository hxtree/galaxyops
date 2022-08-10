# Git Authenticate

It's best to use git and conventional commits from within the container. The following procedures will help generate a SSH credientals if authentication is necessary.

1. add ssh config
    ```
    vim ~/.ssh/config
    Host github.com
        User {USERNAME}
        HostName github.com
        IdentityFile ~/.ssh/github.com
    ```

2. create ssh key
    ```
    sudo ssh-keygen -o -N '' -f ~/.ssh/github.com
    ```

3. print key and add SSH key to [github](https://github.com/settings/ssh/new)
    ```
    cat ~/.ssh/github.com.pub
    ```
    