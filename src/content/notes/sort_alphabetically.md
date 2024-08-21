---
title: "[Algorithm] Sort Alpabetically"
description: ''
pubDate: 'Aug 7 2024 05:04'
---

```js
const posts = (await getCollection('notes')).sort((a, b) => {
const titleA = a.data.title.toUpperCase(); // Convert to uppercase
const titleB = b.data.title.toUpperCase(); // Convert to uppercase

if (titleA < titleB) {
    return -1; // Title A comes before Title B
}
if (titleA > titleB) {
    return 1; // Title A comes after Title B
}
return 0; // Titles are equal
});
```