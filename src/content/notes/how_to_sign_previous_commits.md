---
title: "How to sign previous commits"
description: ''
pubDate: 'Mar 18 2024'
---

Use `git log --show-signature` and find the oldest commit that hasn't been signed off. Let say that commit's hash is `222fd607`.

Go to interactive rebase mode by `git rebase -i <HASH>~1`, replacing `<HASH>` with your oldest non-signed commit which is `222fd60` in this example.

```shell
$ git rebase -i 222fd60~1
```

You'll see list of commits. On the line after each commit you need to sign, add `exec git commit --amend --no-edit -s`.

For example, I added the command below 2 commits: `9d7576d` and `222fd60`.
```text
pick 9d7576d commit message 1
exec git commit --amend --no-edit -s
pick c7b6eea commit message 2
pick e413e83 commit message 3
pick e10b42f commit message 4
pick 222fd60 updated
exec git commit --amend --no-edit -s
```

Once you added the command, save and exit out the interactive rebase mode with `:x`. Push changes and you're done! 

You may need to force push if you haven't made any changes to the existing codebase.

```shell
$ git push -f origin <BRANCH>
```


## Reference
- [Signing commits — Hyperledger Indy SDK documentation](https://hyperledger-indy.readthedocs.io/projects/sdk/en/latest/docs/contributors/signing-commits.html#:~:text=If%20you%20need%20to%20re%2Dsign%20a%20bunch%20of%20previous,s'%20%2Di%20HASH%60)