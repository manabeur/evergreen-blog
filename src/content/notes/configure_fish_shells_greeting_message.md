---
title: "Configure fish shell's greeting message"
description: ''
pubDate: 'May 1 2024'
---

If you want to change [fish shell](/notes/fish_shell)'s initial greeting message, you can set `fish_greeting` in the fish configuration file: `~/.config/fish/config.fish` .

```sh
if status is-interactive
    set fish_greeting 'Happy Coding (｡•̀ᴗ-)✧'
end
```
