---
title: "Clone all repositories using GitHub CLI"
description: ''
pubDate: 'Apr 30 2024 16:15'
---


```shell
$ gh repo list --json=sshUrl --limit=1000 -q ".[].sshUrl" | xargs -n1 git clone
```

//

We can utilize GitHub command-line tool (`gh`) to clone all repositories.

Install `gh` using [Homebrew](/notes/homebrew) or check their [installation guide](https://github.com/cli/cli#installation) for other methods. 
```shell
$ brew install gh
$ gh --version # check if it installed successfully
```

Before we utilize the command-line tool, we need to authenticate `gh` and git with GitHub.
```shell
$ gh auth login
```

This command will bring up the GitHub page for you to grant permissions. Once done, you can return to the terminal. Give this command a try and see if it lists all of your repositories:
```shell
$  gh repo list --limit 1000
```


The `gh repo list` command displays a nice list of all repositories, but we're only interested in the URLs. 

We'll use the `--json=<field>` option, which outputs JSON with the specified fields. The field we want is `sshUrl`.

```shell
$ gh repo list --json=sshUrl --limit=1000
```

The output looks like the following:
```json
[
  {
    "sshUrl": "git@github.com:img9417/minimalist-blog.git"
  },
  {
    "sshUrl": "git@github.com:img9417/portfolio_v2.git"
  },
  {
    "sshUrl": "git@github.com:img9417/img9417.github.io.git"
  },
  ...
]
```

While we have the URLs in JSON format, we want to filter the JSON output using a `jq` expression so that we only have the URL as a string, not in JSON format.
```shell
$ gh repo list --json=sshUrl --limit=1000 -q ".[].sshUrl"
```

Here's the output.
```text
git@github.com:img9417/minimalist-blog.git
git@github.com:img9417/portfolio_v2.git
git@github.com:img9417/img9417.github.io.git
...
```

Now, all we need to do is parse this string into the `git clone` command using the pipe.

```shell
$ gh repo list --json=sshUrl --limit=1000 -q ".[].sshUrl" | xargs -n1 git clone
```

The `-n1` option specifies that `xargs` should use at most one argument per command. Therefore, the above command will use each URL resulting from the first command before the pipe as an argument for the second command, which is `git clone`. 

## References
- Clone all repos from a GitHub organization. (n.d.). Gist. https://gist.github.com/caniszczyk/3856584?permalink_comment_id=4832274#gistcomment-4832274