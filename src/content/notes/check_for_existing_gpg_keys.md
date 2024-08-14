---
title: "Check for existing GPG keys"
description: ''
pubDate: 'May 15 2024 17:38'
---

Use the following command to check for any existing GPG keys. This wont list key IDs.
```shell
$ gpg --list-secret-keys
```

To list key IDs, you need to specify `--keyid-format=short | long` option.
```shell
$ gpg --list-secret-keys --keyid-format=long
```

The `short` format will list shorter version of key IDs while `long` displays the whole ID.

Here's a sample of what the result might look like:
```shell
$ gpg --list-secret-keys --keyid-format=long

/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot <hubot@example.com>
ssb   4096R/4BB6D45482678BE3 2016-03-10
```

## References
- [Github Documentation](https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)
