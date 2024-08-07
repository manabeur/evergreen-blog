---
title: "Publish your Rust Project on Homebrew using GitHub Releases"
description: ''
pubDate: 'Mar 25 2024'
---


You have to have your project setup with `cargo`.

## Preparing the binary

In order to publish your project on Homebrew, you need to provide a binary executable. This can be done simply using the following command:

```shell
$ cargo build --release
```

This will create an optimized, release-ready, version of your project under `target/release` directory with a binary being the name of your project, let's say `pomosh`.

```shell
target/release/pomosh
```

Homebrew expects a tar archive.

```shell
$ cd target/release
$ tar -czf pomosh.tar.gz pomosh
```

## Uploading to Github Releases

Goto your project repository and navigate to `Releases` page. 

Click `Draft new release` button on the top and you'll be navigated to a page where you can upload your packages with a version.

Click `Choose a Tag` and add your version from existing or create one on the fly, `v0.1.0`. Then the title will be your version, `0.1.0`.

Write about your release in the textarea and once you're done, click `Publish relase`.

In the later process, you'll need the URL of tar package (`pomosh-mac.tar.gz`). Open the `Assets` section and copy the URL of your tar archive.

```text
https://github.com/rolemadelen/pomosh/releases/download/v0.1.0/pomosh-mac.tar.gz
```

## Preparing the Third Party Repository

You can install third-party repositories using the `brew tap` command. [Taps](https://github.com/rolemadelen/pomosh/releases/download/v0.1.0/pomosh-mac.tar.gz), are simply a repository with specific names and couple configuration files written in [Ruby](https://www.ruby-lang.org/en/).

We'll create a repository in Github. You'll name your repository using the following format:

```text
homebrew-<project_name>
```

Since our project in this case is `pomosh`, the repo name will be `homebrew-pomosh`.

Create and clone the repository for the next step.

## Preparing the Formula

You'll need to create a [formula](https://docs.brew.sh/Formula-Cookbook) which is a package definition written in Ruby; it's an instruction that describes how to install your binary on the users' computers.

In your newly cloned repository, create a directory named `Formula`, and a ruby script with your project name.

```text
Formula/
⌎-- pomosh.rb
README.md
```

In the `pomosh.rb`, paste the following command.

```rb
# Documentation: https://docs.brew.sh/Formula-Cookbook
#                https://rubydoc.brew.sh/Formula
# PLEASE REMOVE ALL GENERATED COMMENTS BEFORE SUBMITTING YOUR PULL REQUEST!
class Pomosh < Formula
  desc "Command-line Pomodoro Timer written in Rust"
  homepage "https://github.com/rolemadelen/pomosh"
  url "https://github.com/rolemadelen/pomosh/releases/latest/download/pomosh-mac.tar.gz"
  sha256 "YOUR_SHA256"
  version "0.1.0"

  def install
    bin.install "pomosh"
  end
end
```

Make sure to replace all `pomosh` with your project name including the **class name**.

You can get your SHA256 hash using the following command on your tar archive:
```shell
$ shasum -a 256 pomosh.tar.gz
```

Once you're done, commit and push the changes.

```shell
$ gaa # git add all
$ gcmsg "v0.1.0 release" # git commit -m "message"
$ ggp # git push origin <your current branch>
```

## Installing the package

Now you're ready to install your package using Homebrew.

```shell
$ brew tap <github_username>/<project_name>
$ brew install <project_name>
```

In my case, it will be:
```shell
$ brew tap rolemadelen/pomosh
$ brew install pomosh
```

## Reference
- [How to Publish your Rust project on Homebrew](https://federicoterzi.com/blog/how-to-publish-your-rust-project-on-homebrew/)
