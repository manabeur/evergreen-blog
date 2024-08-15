---
title: "git-filter-repo"
description: ''
pubDate: 'Apr 30 2024 02:45'
---

Previously, people used [git-filter-branch](https://git-scm.com/docs/git-filter-branch) to rewrite commit history but it is no longer used or used less as it's [somewhat deprecated as of Git 2.24, Q4 2019](https://stackoverflow.com/questions/25720268/git-commands-that-could-break-rewrite-the-history/58251653#58251653). Instead, I can now use [git-filter-repo](https://github.com/newren/git-filter-repo?tab=readme-ov-file).

`git filter-repo` is not only faster than the `git filter-branch` but also equipped with more capabilities. I've only [Use git-filter-repo to rewrite commit authors](/notes/use_git-filter-repo_to_rewrite_commit_authors) and haven't tried any other features, so I don't exactly know what features they have.

## brew

Since I'm using macOS, I can use [Homebrew](/notes/homebrew) to easily install it.
```sh
$ brew install git-filter-repo
```

After the installation, I can use either `git filter-repo` or `git-filter-repo`.

## pip

Alternatively, I can use `pip` to install the package:
```shell
$ python3 -m pip install --user git-filter-repo
```

Make sure the path to python is added on the path, otherwise I won't be able to use `git filter-repo` or `git-filter-repo`. Instead, I will have to use the whole path to use it.

```shell
$ <PATH TO PYTHON>/<VERSION>/bin/git-filter-repo
```

