---
title: "Configure tmux to start with a fish shell"
category: 'tmux'
pubDate: 'May 1 2024 02:56'
---

Set the option in tmux configuration file located at root (`~/.tmux.conf`) to start tmux with a [fish shell](/notes/fish_shell).

```sh
set-option -g default-shell /usr/local/bin/fish
```
