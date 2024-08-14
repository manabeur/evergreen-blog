---
title: "Access the iCloud folder from the terminal"
description: ''
pubDate: 'Apr 29 2024 09:55'
---

Use the following path to access iCloud folder from the terminal:

```sh
cd ~/Library/Mobile\ Documentsn/com~apple~CloudDocs
```

You may encounter `Permission Denied` error. This can be solved by giving a `Full Disk Access` to the terminal from the setting.

Set up a symlink to have an easy access to your iCloud:

```sh
ln -s  ~/Library/Mobile\ Documentsn/com~apple~CloudDocs iCloud

cd iCloud
```