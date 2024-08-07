---
title: "Setting up cmake for C++"
description: ''
pubDate: 'Jun 10 2024'
---

Install `cmake` using [[Homebrew]].

```sh
$ brew install cmake
```

Create a `CMakeLists.txt` file to configure compiling option for your source code.

```text
# CMakeLists.txt

# Set the minimum required version of CMake
cmake_minimum_required(VERSION 3.10)

# Set the project name
project(arrays_proj)

# Specify the C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Add the executable
add_executable(main.out main.cc ivector.cc ivector_test.cc)
```

Then run the command `cmake <PATH>`. 
`<PATH>` is where `CmakeLists.txt` exists.

```sh
$ cmake .
```

Then you can run `make` to compile your c++ code.