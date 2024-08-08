---
title: "Static Array"
description: ''
pubDate: 'Jun 11 2024'
---

There are [Different types of an array](/notes/different_types_of_an_array) and _static array_ is one of them.

Static array is created at compile time. That's why it is _static_. Since the size of the array is fixed, you must know the size of it beforehand. Also it cannot be extended or re-scaled during the runtime.

```cpp
#include <iostream>

using std::cout;
using std::endl;

int main() {
	// initializing static array
	int arr[5];

	// assigning values
	arr[0] = 1;
	arr[1] = 2;
	arr[2] = 3;
	arr[3] = 4;
	arr[4] = 5;

	// output the first number
	cout << arr[0] << endl;
}
```

If you don't know the size beforehand or you need to be able to rescale the array, you might want to use a [Dynamic Array](/notes/dynamic_array).