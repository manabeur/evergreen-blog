---
title: "Selecting a module class in React"
description: ''
pubDate: 'Mar 02 2024 16:39'
---


When you create a module class in React, the rendered class name contains a random suffix string.

You can attempt the following to query select a `styles.header` which **wont** work:

```jsx
const header = document.querySelector(styles.header)
```

You actually need to wrap the whole thing as a class:

```jsx
const header = document.querySelector(`.${styles.header}`)
```
