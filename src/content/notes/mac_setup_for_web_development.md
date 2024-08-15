---
title: "Mac Setup for Web Development"
description: ''
pubDate: 'Apr 29 2024 15:29'
---

## MacBook Pro Specification
- 13-inch, 2020
- 2 GHz Quad-Core Intel Core i5
- 16 GB RAM
- 512 GB SSD
- Key Layout - QWERTY
- macOS Sonoma 14.5

## System Preferences
- Appearance
  - Appearance - _Light_
  - Show scroll bars - _Always_ (ugly I know)
- Control Center
  - Battery - _Show Percentage_
  - Automatically hide and show the menu bar - _Always_
- Siri & Spotlight
  - Ask Siri - _Disable_
  - Spotlight Search result - disable all except ...
    - Applications
    - Calculator
    - Conversion
    - Definition
    - System Settings
- Privacy & Security
  - FileVault - _ON_
- Desktop & Dock
  - Position on screen
    - if a single monitor -> _Left_
    - Multiple monitors -> _Bottom_
  - Automatically hide and show the Dock - _Enable_
  - Animate opening applications - _Disable_
  - Show suggested and recent apps in Dock - _Disable_
  - Default web browser - Safari
- Displays
  - Use as - _More Space_
- Wallpaper
  - Slam Dunk 
- Battery
  - Low Power Mode - _Only on Battery_
- Lock Screen
  - Start Screen Saver when inactive - _For 20 minutes_
  - Turn display off on battery when inactive - _For 10 minutes_
  - Turn display off on power adapter when inactive - _For 30 minutes_
  - Require password after screen saver begins or display is turned off - _After 15 minutes_
- Touch ID & Password
  - Use Apple Watch to unlock you applications and your Mac - _Enable_
- Keyboard
  - Text Input
    - Dvorak
    - Japanese - Romaji
    - 3-Set Korean (390)
  - Text Input Options
    - Correct spelling automatically - _Disable_
    - Capitalize words automatically - _Disable_
    - Add period with double-space - _Disable_
    - Use smart quotes and dashes - _Disable_ 
- Trackpad
  - Point & Click
    - Tracking Speed - all the way to _fast_
    - Silent clicking - _Enable_
    - Force Click and haptic feedback - _Disable_
    - Tap to click - _Enable_
  - More Gestures
    - Notification center - _Disable_
- Finder -> Settings
  - General
    - Show these items on the desktop: _Disable All_
    - New finder windows show: _Home_
  - Tags
    - _Disable All_
  - Sidebar
    - _uncheck_ Recents
    - _check_ Home
    - _uncheck_ Shared iCloud
  - Advanced
    - Show all filename extensions  - _Enable_
    - Remove items from the Trash after 30 Days - _Enable_
- Sharing
  - _Disable_ all sharing
  - Edit Local hostname
  - Also in terminal:
    - `sudo scutil --set ComputerName "newname"`
    - `sudo scutil --set LocalHostName "newname"`
    - `sudo scutil --set HostName "newname"`

## System Preferences (Terminal)

### Take screenshots as JPG
```bash
defaults write com.apple.screencapture type jpg
```

### Show hidden files
```bash
defaults write com.apple.finder AppleShowAllFiles YES
```

### Show path bar
```bash
defaults write com.apple.finder ShowPathbar -bool true
```

### Show status bar
```bash
defaults write com.apple.finder ShowStatusBar -bool true
```

## Homebrew
Setup [Homebrew](/notes/homebrew) and install GUI and CLI applications: [GUI and CLI applications I install when first setting up macOS](/notes/gui_and_cli_applications_i_install_when_first_setting_up_macos).

### Git & Git LFS

Configure the global user name and email:
```bash
git config --global user.name 'NAME'
git config --global user.email 'EMAIL'
```

Initiate LFS setting by installing it:

```bash
git lfs install
git lfs install --system # you may skip this
```

To process unicode file names:

```bash
git config --global core.precomposeunicode true
```

Backup or create SSH and GPG keys.

Get the GPG key using `gpg --list-secret-keys --keyid-format=long` and set the global defaults to sign your commits by default.

```bash
git config --global user.signingkey <key>
git config --global commit.gpgsign true
git config --global gpg.program /usr/local/bin/gpg
```

You may need to run the following:

```bash
export GPG_TTY=$(tty)
echo "pinentry-program /usr/local/bin/pinentry-mac" > ~/.gnupg/gpg-agent.conf
gpgconf --kill gpg-agent # restart the gpg service
```

## Neovim
I'm using the [kitty](https://sw.kovidgoyal.net/kitty/) terminal.

### Oh-My-Fish
Install [oh-my-fish](/notes/oh_my_fish) (OMF) and go through basics about installing packages, changing the theme, and setting up a font.

Also setup the node environment in OMF:  [Setting up NVM on oh-my-fish](/notes/setting_up_nvm_on_oh-my-fish).

### LazyVim
LazyVim makes your terminal into an IDE and makes it super easy and convenient to customize it. Go through the installation of [LazyVim](/notes/lazyvim).

## shell setup
[Let the default shell start up with tmux](/notes/let_the_default_shell_start_up_with_tmux). Then [Configure tmux to start with a fish shell](/notes/configure_tmux_to_start_with_a_fish_shell). If you don't like the initial greeting message of a fish, you can [Configure fish shell's greeting message](/notes/configure_fish_shells_greeting_message).

## Fish shell aliases
[Configure aliases in the fish shell](/notes/configure_aliases_in_the_fish_shell). You can add your [git aliases](/notes/git_aliases) here as well or create a separate file such as `git_aliases.fish`.
