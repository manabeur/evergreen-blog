---
title: "Generate a new GPG key"
description: ''
pubDate: 'Mar 15 2024'
---

Visit [GnuPG's Download Page](https://www.gnupg.org/download/) to install the GPG command line tools. Once installed, check its version using `gpg --version`.

If the version is **2.1.17 or greater**, use the following command:
```sh
$ gpg --full-generate-key
```

**Otherwise**, use this command to start the process.
```sh
$ gpg --default-new-key-algo rsa4096 --gen-key
```

---

You will be prompted multiple times by the program. Choose the desired option each time and proceed, or simply press `Enter` to accept the default selection.

Once you have selected all the options, verify the information, and if everything is correct, proceed, and the GPG key will be generated.

Check the key you've just created using the following command:
```shell
$ gpg --list-secret-keys --keyid-format=long

/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot <hubot@example.com>
ssb   4096R/4BB6D45482678BE3 2016-03-10
```

Then if you want, you can use this command to export the GPG key in ASCII-armored format:
```shell
$ gpg --armor --export 3AA5C34371567BD2
```

You can then use the exported key for various purposes, including adding it to your accounts on platforms like GitHub.


## Reference
- [Generating a new GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
