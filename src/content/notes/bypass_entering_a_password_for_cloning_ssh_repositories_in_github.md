---
title: "Bypass entering a password for cloning SSH repositories in GitHub"
description: ''
pubDate: 'Apr 30 2024'
---

I was trying to [[Clone all repositories using GitHub CLI]] but it kept prompting password for my github account for each clone. I was looking for a way to bypass this and the key was in SSH configuration.

First [[Create the SSH configuration file]] in `~/.ssh` if it doesn't already exist:
```sh
touch ~/.ssh/config
```

Add the new SSH key in the `config` file:
```text
Host github.com
   HostName github.com
   IdentitiesOnly yes
   UseKeychain yes
   IdentityFile ~/.ssh/id_ed25519
```

Add SSH key to MacOS' keychain:
```sh
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Test the connection.
```sh
$ ssh-keyscan github.com >> ~/.ssh/known_hosts
$ ssh -T git@github.com

Hi img9417! You've successfully authenticated, but GitHub does not provide shell access.
```

If you didn't, add the public key to GitHub Settings. This can be done via website or via GitHub CLI (`gh`).

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

Now it shouldn't ask for the password.

---
## References
- [Using multiple GitHub accounts with SSH keys](https://gist.github.com/oanhnn/80a89405ab9023894df7)