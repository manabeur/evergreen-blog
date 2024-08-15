---
title: "Rename the master branch to main"
description: ''
pubDate: 'May 15 2024 18:13'
---

Rename the local `master` branch to `main`.
```sh
$ git branch -m master main
```

You can double check with `git status`.
```sh
$ gst # git status
On branch main
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

## Rename the remote branch

We can't simply _rename_ the remote branch. We'll have to create a new branch name `main` and push it.

```sh
$ git push -u origin main
```

We now have a new branch on the remote named `main`. Go ahead and delete the old `master` branch on the remote.

```sh
$ git push origin --delete master
```

## Error
You may encounter this error:
```sh
To https://github.com/gittower/git-crashcourse.git
! [remote rejected]   master (refusing to delete the current branch: refs/heads/master)
error: failed to push some refs to 'https://example@github.com/gittower/git-crashcourse.git'
```

This is because your `master` branch is the _default_ branch in your repository. GitHub expects you to select a default branch and wont allow this branch to be deleted.

Navigate to your repository setting and go to the _Branches_ section. Update the default branch from `master` to `main`.

Now try it again.

```sh
$ git push origin --delete master
```

## What should my teammates do?

If other people have local clones of your repository, they can do the following:

```sh
# switch to the 'master' branch
$ gco master # git checkout master 

# rename it to 'main'
$ git branch -m master main

# get the latest commits and branches from the remote
$ git fetch

# remove the existing tracking connection with 'origin/master'
$ git branch --unset-upstream

# create a new tracking connection with the new 'origin/main'
$ git branch -u origin/main
```


## References
- How to rename the “master” branch to “main” in Git. (n.d.). Learn Version Control With Git. https://www.git-tower.com/learn/git/faq/git-rename-master-to-main