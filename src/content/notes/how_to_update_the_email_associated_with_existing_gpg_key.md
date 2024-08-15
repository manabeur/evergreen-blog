---
title: "How to update the email associated with existing GPG key"
description: ''
pubDate: 'May 18 2024 12:49'
---

[Check for existing GPG keys](/notes/check_for_existing_gpg_keys) and get the key which you want to update the email.

```sh
$ gpg --list-secret-keys --keyid-format=long

sec   ed25519/1420DCAC2218D8CF 2024-03-04 [SC]
      51D19A62EAB0A97D21B975521420DCAC2218D8CF
uid                 [ultimate] Jii Yoo <rolemadelen@tuta.io>
ssb   cv25519/F6E9A1DC50DE1D24 2024-03-04 [E]
```

In this case, we'll use the key `1420DCAC2218D8CF`.

Enter the following command to edit the key.
```sh
$ gpg --edit-key 1420DCAC2218D8CF
```

Then the you'll be in gpg prompt session waiting for you to type a command. Type `adduid` to add the new (or corrected) author name and the email.

```sh
$ gpg> adduid
```

Then, use `deluid` to remove the old. You first need to select the user ID.

```sh
$ gpg --edit-key 1420DCAC2218D8CF
$ >gpg 1 # choose user ID (1)

sec  ed25519/1420DCAC2218D8CF
     created: 2024-03-04  expires: never       usage: SC
     trust: ultimate      validity: ultimate
ssb  cv25519/F6E9A1DC50DE1D24
     created: 2024-03-04  expires: never       usage: E
[ultimate] (1)*. OLD NAME <OLD EMAIL>
[ unknown] (2). NEW NAME <NEW EMAIL>

$ >gpg deluid
```

You end up with an updated name and the email. One last thing you need to do is configure how much you trust this key.

```shell
$ >gpg 2 # choose 
$ >gpg trust

Please decide how far you trust this user to correctly verify other users\' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don\'t know or won\'t say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Your decision? 5
```
