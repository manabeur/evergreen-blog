---
title: "git aliases"
category: 'Git'
pubDate: 'May 1 2024 03:15'
---

My git aliases for the [fish shell](/notes/fish_shell). I created a file `git_aliases.fish` and add it to `~/.config/fish/conf.d/`.

```bash
alias g='git'
alias gd='git diff'
alias gst='git status'

alias ga='git add'
alias gaa='git add --all'
alias gcmsg='git commit -m'

alias gl='git pull'
alias gll='git pull origin (current_branch)'
alias gp='git push'
alias gpp='git push origin (current_branch)'
alias gpf='git push -f origin (current_branch)'

alias gco='git checkout'
alias gs='git switch' # switch branch
alias gsp='git switch -' #switch back to previous branch
alias gsm='git switch main'

alias gb='git branch'
alias gba='git branch -a'

alias gcount='git shortlog -sn'
alias glo='git log --oneline'
alias gloga='git log --oneline --graph --all'

alias gwc='git whatchanged'
alias gwcp='git whatchanged -p --abbrev-commit --pretty=medium'

alias gr='git restore --staged' # unstage changes; git reset file
alias grd='git restore --staged --worktree' # unstage and discard changes; git checkout file
alias gsundo='git reset --soft HEAD~1'
alias ghundo='git reset --hard HEAD~1'

alias gwa='git worktree add'
alias gwr='git worktree remove'
alias gwl='git worktree list'

alias gbs='git bisect start'
alias gbb='git bisect bad'
alias gbg='git bisect good'

function current_branch
    set ref (git symbolic-ref HEAD 2> /dev/null); or set ref (git rev-parse --short HEAD 2> /dev/null); or return
    echo $ref | sed -e 's|^refs/heads/||'
end
```