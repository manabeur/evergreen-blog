---
title: "Sort Alpabetically"
description: ''
pubDate: 'Aug 7 2024'
---

```js
const posts = (await getCollection('notes')).sort((a, b) => {
const titleA = a.data.title.toUpperCase(); // Convert to uppercase for case-insensitive comparison
const titleB = b.data.title.toUpperCase(); // Convert to uppercase for case-insensitive comparison

if (titleA < titleB) {
    return -1; // Title A comes before Title B
}
if (titleA > titleB) {
    return 1; // Title A comes after Title B
}
return 0; // Titles are equal
});
```