---
title: "My MacBook Setup"
category: 'dev'
pubDate: 'Nov 4 2024 12:08:00'
---

I time to time factory reset my mac just for the hell of it. This is a note to myself to remember what tools and apps I need to install.

## Homebrew

To make installation faster, I first install homebrew. Then, I can use `brew` to install other GUI and CLI tools I need.

```sh
# install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Install GUI applications
```sh
brew install --cask \
  bitwarden \
  raycast \ 
  spotify \
  rectangle \
  obsidian \
  iterm2 \
  brave-broweser
```

Obsidian is a note taking app. [I migrated from Bear app to Obsidian](/writing/i-migrated-from-bear-app-to-obsidian) lately.


## Install CLI applications
```sh
brew install \
  git \
  gh \
  gpg \
  pinentry-mac \
  pnpm \
  tmux \
  coreutils \
  curl \
  asdf # runtime manager
```

## Runtime Manager 

Use `asdf` to install `ruby` and `nodejs`. asdf is a CLI tool that can manage multiple language runtime versions.

Ruby Installation
```sh
asdf install ruby latest
asdf global ruby x.x.x
```

Node.js Installation
```sh
asdf install nodejs latest
asdf global nodejs x.x.x
```

## System Preferences (Terminal)
```sh

# Take screenshots as JPG
defaults write com.apple.screencapture type jpg

# Show hidden files
defaults write com.apple.finder AppleShowAllFiles YES

# Show path bar
defaults write com.apple.finder ShowPathbar -bool true

# Show status bar
defaults write com.apple.finder ShowStatusBar -bool true
```

Also in terminal:
- `sudo scutil --set ComputerName "newname"`
- `sudo scutil --set LocalHostName "newname"`
- `sudo scutil --set HostName "newname"`