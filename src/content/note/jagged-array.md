---
title: "Jagged Array"
category: "ea1c"
pubDate: "Jan 01 2025 20:30:00"
---

Jagged array, also known as irregular array, is an array of arrays. Difference between a multidimensional array is that each member can have a  different length producing rows of jagged edges.

```textile
*arr[4] 
            ---------------------
arr[0] ---> | 0 | 1 | 2 |
arr[1] ---> | 6 | 4 |
arr[2] ---> | 1 | 7 | 6 | 8 | 9 |
arr[2] ---> | 5 |
            ----------------------
```

Jagged arrays are useful for storing data with different length, such as sparse matrices. They could be more useful than multidimensional arrays where members have the same length, because only needed spaces are used; no space is wasted.

```c 
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char**argv) {
	const unsigned SIZE = 4;
	int *arr[SIZE];

	unsigned sz[] = {3, 2, 5, 1};

	for(int i=0; i<SIZE; ++i)
		arr[i] = (int *)malloc(sizeof(int) * sz[i]);

	arr[0][0] = 0;
	arr[0][1] = 1;
	arr[0][2] = 2;

	arr[1][0] = 6;
	arr[1][1] = 4;

	arr[2][0] = 1;
	arr[2][1] = 7;
	arr[2][2] = 6;
	arr[2][3] = 8;
	arr[2][4] = 9;

	arr[3][0] = 5;

	for(int i=0; i<SIZE; ++i) {
		printf("Array row #%d: ", i+1);
		for(int j=0; j<sz[i]; ++j) {
			printf("%d ", arr[i][j]);
		}
		printf("\n");
	}

	for(int i=0; i<SIZE; ++i)
		free(arr[i]);

	return 0;
}
```

The above code produce the following result.
```textile
Array row #1: 0 1 2 
Array row #2: 6 4 
Array row #3: 1 7 6 8 9 
Array row #4: 5 
```

Jagged array is most likely to be a [Dynamic Array](/note/dynamic-array) since each member (an array) will need to be allocated with different length of data. Also it may be better to use an array of [linked lists](/note/what-is-a-linked-list) or vectors instead if possible ([[it's better to use a vector or a linked list than a dynamic array]]).