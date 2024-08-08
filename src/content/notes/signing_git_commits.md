---
title: "Signing git commits"
description: ''
pubDate: 'May 15 2024'
---

List your GPG keys ([Check for existing GPG keys](/notes/check_for_existing_gpg_keys)) and choose one to use for signing git commits. In this example, we will use `3AA5C34371567BD2` as the GPG key ID.

```shell
$ gpg --list-secret-keys --keyid-format=long

# example
/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot <hubot@example.com>
ssb   4096R/4BB6D45482678BE3 2016-03-10
```

## Setup

Use the following command to set your primary GPG signing key in Git.
```shell
$ git config --global user.signingkey 3AA5C34371567BD2
```

If you are using a subkey (e.g. `4BB6D45482678BE3`), include `!` as a suffix.
```shell
$ git config --global user.signingkey 4BB6D45482678BE3!
```

## Sign off

Now you can use `-s` flag to sign off a commit.
```sh
$ git commit -s -m "commit message"
```

You can use `git log --show-signature` to check signed commits.

If you want to re-sign the most current commit, use the following command.
```sh
$ git commit --amend --no-edit -s
```

But if you want to make this a default behavior, set `commit.gpgsign` to `true`. Then you can omit the `-s` flag.

```sh
$ git config --global commit.gpgsign true
$ git commit -m "commit message"
```

## Reference
- [Signing commits — Hyperledger Indy SDK documentation](https://hyperledger-indy.readthedocs.io/projects/sdk/en/latest/docs/contributors/signing-commits.html#:~:text=If%20you%20need%20to%20re%2Dsign%20a%20bunch%20of%20previous,s'%20%2Di%20HASH%60)
- [Telling Git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)