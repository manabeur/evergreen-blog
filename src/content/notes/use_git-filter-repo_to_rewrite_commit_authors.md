---
title: "Use git-filter-repo to rewrite commit authors"
description: ''
pubDate: 'Apr 30 2024'
---

[[git-filter-repo]] is a tool to rewrite github repository commit history. It can be used to rewrite authors information on a commit.

## mailmap

To use `git filter-repo`, you'll need to prepare a mailmap file, which is used to replace your old author names and emails with the new ones. The syntax for the mailmap file is as follows:

```text
Correct Name <correct@email.com> OLD NAME1 <old@email1.com>
Correct Name <correct@email.com> OLD NAME2 <old@email2.com>
```

Feel free to add as many `OLD NAME` and `OLD EMAIL` entries as necessary for multiple author names that need to be changed.

For example,

```text
Madelen Yoo <myoo@pm.me> John Doe <john@doe.com>
Madelen Yoo <myoo@pm.me> John Doe <johndoe@example.com>
Madelen Yoo <myoo@pm.me> Jane Doe <jane-doe@example.com>
```

## git filter-repo

Please note that you need a freshly cloned repository. If you are performing this on an existing repository, it's advisable to re-clone it.

```shell
$ cd repo

repo/$ git filter-repo --mailmap your-mailmap
```

After completing the task, the `origin` remote will be automatically removed. To restore it, you will need to add the `origin` back to your repository using the following command:

```shell
$ repo/$ git remote add origin REPO-URL
```

## mass shortcut

- open repo on a browser to copy remote origin (SSH URL)
- unarchive the repo if it is
- rewrite `Signed-off-by` message
- change authors using the mailmap
- rebase all commits

```sh
$ gh repo view --web && gh repo unarchive && git-filter-repo --message-callback 'return re.sub(b"Signed-off-by: Jii Yoo <img9417@tuta.io>\n",b"",message)' && git filter-repo --mailmap ../mailmap && git rebase --exec 'git commit --amend --no-edit -n -n --allow-empty' -i --root
```

Then
- add remote origin
- git force push -> `gpf`
- if needed, archive the repo again