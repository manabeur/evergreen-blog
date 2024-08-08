---
title: "LazyVim"
description: ''
pubDate: 'May 01 2024'
---

[LazyVim](https://www.lazyvim.org/) lets you customize your terminal super easy. It also comes with vast number of plugins pre-configured.

## Installation
Make a back up of your current neovim files.
```bash
# required
mv ~/.config/nvim{,.bak}

#optional; you can delete it instead of backing it if you want
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
```

Install it.
```bash
git clone https://github.com/LazyVim/starter ~/.config/nvim
rm -rf ~/.config/nvim/.git
nvim
```

When you first launch `nvim`, it will install lazy vim and its plugins.