---
title: "Change the computer name that displays it in macOS terminal"
category: 'Terminal'
pubDate: 'May 18 2024 16:56'
---

Open a terminal and enter the following commands:

```sh
sudo scutil --set ComputerName "newname"
sudo scutil --set LocalHostName "newname"
sudo scutil --set HostName "newname"
```

You can also change the name from `System Settings -> Sharing -> Local Hostname` and click `edit`.

## References
- How to change computer name so terminal displays it in Mac OS X Mountain Lion? (n.d.). Ask Different. https://apple.stackexchange.com/questions/66611/how-to-change-computer-name-so-terminal-displays-it-in-mac-os-x-mountain-lion