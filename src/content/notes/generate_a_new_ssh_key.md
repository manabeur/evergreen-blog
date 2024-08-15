---
title: "Generate a new SSH key"
description: ''
pubDate: 'Mar 15 2024 17:41'
---

Create a new SSH key in the `~/.ssh` directory.

```shell
# if directory doesn't exist
mkdir ~/.ssh
cd ~/.ssh

# generate the ssh key
ssh-keygen -t ed25519 -C <COMMENT>
```

I suggest adding a comment when creating SSH key such as _GitHub_. That way, you know which key belongs to which software.

```shell
ssh-keygen -t ed25519 -C "github"
```

This will create two files: a private key (`id_25519`) and the public one (`id_25519.pub`).

These files can be used to add the new SSH key to the machine (e.g. macOS's keychain) or other hub accounts (e.g. GitHub or BitBucket). These files are also used when configuring SSH ([Create the SSH configuration file](/notes/create_the_ssh_configuration_file)).

```sh
# add the new SSH key to macOS's keychain
ssh-add --apple-use-keychain ~/.ssh/id_25519

# add the new SSH key to your github account
gh ssh-key add ~/.ssh/id_ed25519.pub
```