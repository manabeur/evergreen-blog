---
title: "Oh-My-Fish"
description: ''
pubDate: 'May 02 2024'
---

[Oh-My-Fish](https://github.com/oh-my-fish/oh-my-fish) or `omf` is a fish shell framework. It requires a [fish shell](/notes/fish_shell) to be installed first.

## Installation

```bash
curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish
```

### Installing packages
You can easily install packages using `omf install`:
```sh
$ omf install z
```

### Customize Theme and Setup Fonts
Show all themes using `omf theme`:
```bash
$ omf theme

Available:
...
toaster
```

Let's say I want to use the theme `toaster`, I can install it like the following:
```bash
$ omf install toaster
```

If you need to uninstall it, run `omf uninstall <THEME>`
```bash
$ omf uninstall toaster # and reload the terminal
```

Install the Meslo Nerd Font:
```bash
$ brew tap homebrew/cask-fonts
$ brew install font-meslo-lg-nerd-font
```

You can change the font from the terminal's settings or configuration file. For kitty terminal, goto `Settings` or press `⌘ + ,` on macOS. Find `# font_family`, un-comment it, and replace the `monospace` with `MesloLGS Nerd Font Mono`.

---

You can also set up the node env, but [Setting up NVM on oh-my-fish](/notes/setting_up_nvm_on_oh-my-fish) requires a bit of configuration.