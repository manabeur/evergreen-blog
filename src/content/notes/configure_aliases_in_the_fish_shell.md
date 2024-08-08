---
title: "Configure aliases in the fish shell"
description: ''
pubDate: 'May 1 2024'
---


You can configure aliases in fish shell by two ways. One way by manually adding aliases in the file `alias.fish` located in  `~/.config/fish/conf.d`. As long as the extension is `.fish`, you can name the file however you like. You can also create multiple files to separate aliases if you want (e.g. [git aliases](/notes/git_aliases)).

In the file `aliase.fish`, you can add your aliases.

```bash
# alias.fish

alias vim='nvim'
alias cat='bat'
```

Another way is by using the `alias` command to create a function in the fish shell.

```sh
$ alias --save vim nvim
funcsave: wrote /Users/img/.config/fish/functions/vim.fish

$ alias --save cat bat
funcsave: wrote /Users/img/.config/fish/functions/cat.fish
```

If you navigate to that directory and open `vim.fish`, you can check that `alias` simply a wrapper for `function`. 

```sh
function vim --wraps=nvim --description 'alias vim nvim'
  nvim $argv
end
```