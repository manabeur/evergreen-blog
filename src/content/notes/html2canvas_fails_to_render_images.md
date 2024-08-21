---
title: "html2canvas fails to render images"
category: ''
pubDate: 'May 18 2024 16:10'
---

If your images are saved in other server and you fetched it to display the images, `html2canvas` may fail to render those images on download. This is likely due to CORS issue.

This can be solved easily by attaching the `useCORS: true` option in the code.

```js
html2canvas(el, {
  useCORS: true, // cross origin images will be rendered properly in the image
  onrendered: myRenderFunction
})
```


## References
- html2canvas not rendering image (externally hosted images). (n.d.). Stack Overflow. https://stackoverflow.com/questions/30372417/html2canvas-not-rendering-image-externally-hosted-images