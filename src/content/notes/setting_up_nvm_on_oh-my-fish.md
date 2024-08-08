---
title: "Setting up NVM on oh-my-fish"
description: ''
pubDate: 'May 2 2024'
---


setting up node in [oh-my-fish](/notes/oh_my_fish) requires a bit of configuration than simply installing it.

### install NVM package
```bash
omf install nvm
```

### Set the NVM directory:
```bash
set -gx NVM_DIR (brew --prefix nvm)
```

### Install the NVM plugin for Fisher. 
```bash
fisher install jorgebucaran/nvm.fish
```

If you don't have `fisher`, you can install it using `brew install fisher`:

### Install and use Node
```bash
nvm install latest
nvm use latest
set --universal nvm_default_version latest
```

You may want to remove the conflicting Node versions:

```bash
which -a node
...
rm -rf /usr/local/bin/node
```

