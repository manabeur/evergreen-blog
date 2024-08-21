---
title: "Unarchive all repositories using GitHub CLI"
category: 'GitHub'
pubDate: 'May 2 2024 08:49'
---

```sh
$ gh repo list --json=nameWithOwner --limit 1000  -q ".[].nameWithOwner" | xargs -n1 gh repo unarchive -y
```

//

You can unarchive a GitHub repository from the command line using the following format:

```sh
$ gh repo unarchive username/repo-name
```

For example, to unarchive a repository named `foo` from your account (let's say `madelen`), run the following command:

```sh
$ gh repo unarchive madelen/foo
```

Let's say you have many archived repositories, and you need to unarchive each one to make changes to the author and email in the commit history. You can either manually navigate to each repository on GitHub, go to Settings, and unarchive them one by one, or, you can use `gh repo list` with the JSON option to filter out all repository names and chain it with another command to unarchive them.

The `gh` CLI provides a `--json=<field>` option. We can use the `nameWithOwner` field to get repositories in the `username/repo-name` format.

```sh
$ gh repo list --json=nameWithOwner --limit 1000  -q ".[].nameWithOwner"
```

Output:
```text
img9417/minimalist-blog
img9417/portfolio_v2
img9417/img9417.github.io
img9417/asayake
img9417/aikomicare
img9417/interactive-profile
img9417/password-generator
img9417/add-card-form-ui
img9417/link-in-bio
...
```

Now, chain this result from the first command with a second command using the pipe symbol to unarchive all repositories.

```shell
$ gh repo list --json=nameWithOwner --limit 1000  -q ".[].nameWithOwner" | xargs -n1 gh repo unarchive -y
```

For a repository that is already unarchived, the command will display a message indicating that the repository is already unarchived. It's not an error, so as a result,  all repositories will be unarchived after the command is processed.