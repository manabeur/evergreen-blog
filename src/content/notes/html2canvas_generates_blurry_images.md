---
title: "html2canvas generates blurry images"
description: ''
pubDate: 'Apr 03 2024 16:59'
---

You can use `scale` option in the code to increase the resolution.

```js
html2canvas(el, {
  scale: 2,
  onrendered: myRenderFunction
})
```

`scale` defaults to `window.devicePixelRatio`. This means, if we set `window.devicePixelRatio = 2` before the call to `html2canvas`, it'll to do the same job as scaling it to `2`.



## References
- HTML2canvas generates Blurry images. (n.d.). Stack Overflow. https://stackoverflow.com/questions/22803825/html2canvas-generates-blurry-images