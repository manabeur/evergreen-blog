---
title: "Dynamic Array"
category: "ea1b"
pubDate: "Jan 01 2025 17:20:00"
---

The size must be known beforehand to declare an [array](/note/what-is-an-array) and use it ([Static Array](/note/static-array)), however, in real life, the size is often unknown; we don't exactly know how many data we'll be handling it.

Dynamic arrays exist for that reason. It allows you to declare an array with a specified size at a runtime and you can even re-scale the size or capacity of the array. But generally, [[it's better to use a vector or a linked list than a dynamic array]].

```c 
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char**argv) {
	int *arr;
    int size = 5;
    
	arr = (int *)malloc(sizeof(int) * size);

	arr[0] = 0;
	arr[1] = 1;
	arr[2] = 2;
	arr[3] = 3;
	arr[4] = 4;

	printf("*(arr+4): %d\n", *(arr+4)); // 4
	printf("arr[4]: %d\n", arr[4]);     // 4

    // reallocating the array
    size = 10
	arr = (int *)realloc(0, sizeof(int) * size);

	arr[9] = 9;

	printf("*(9+arr): %d\n", *(9+arr));  // 9
	printf("arr[9]: %d\n", arr[9]);      // 9

	free(arr);

	return 0;
}
```