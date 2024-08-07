---
title: "styling webkit-scroll-value in safari"
description: ''
pubDate: 'Mar 02 2024'
---

Before styling `webkit-scroll-value` in Safari, it's essential to reset its existing styles. Otherwise, your style wont be applied.

```css
progress[value] {
	-webkit-apperance: none;
	appearance: none;
}
```

## Reference
- [My progress bar styles are not working?](https://stackoverflow.com/questions/32189050/my-progress-bar-styles-are-not-working)