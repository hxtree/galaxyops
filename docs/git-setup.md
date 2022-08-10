# Git Setup

It's best to use git and conventional commits from within the container. The following procedures will help generate a SSH credientals if authentication is necessary and store key on a persistant volume.

1. add ssh config

vim ~/.ssh/config

```
Host github.com
    User {USERNAME}
    HostName github.com
    IdentityFile ~/github-ssh-key/github.com
```

2. create ssh key
    ```
    sudo ssh-keygen -o -N '' -f ~/github-ssh-key/github.com
    ```

3. print key and add SSH key to [github](https://github.com/settings/ssh/new)
    ```
    cat ~/github-ssh-key/github.com.pub
    ```
    