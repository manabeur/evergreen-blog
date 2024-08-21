---
title: "Mapping 2D array indices onto 1D array"
category: 'CS'
pubDate: 'May 15 2024 18:30'
---

The general formula for mapping 2D array indices onto 1D array is: `width * row + col`.

//

You can use 1-dimensional array as if it is a 2-dimensional array. The general formula to map 2D indices into 1D index is `width * row + col`.

You can create a function like the following to set a value.
```c
void setElement(int row, int col, int value) {
	arr[WIDTH * row + col] = value;
}
```

Then print the values using nested loops treating it like a 2-D array.
```c
/*
const int ROW = 3;
const int COL = 5;
const int WIDTH = COL;
int arr[ROW * COL];
*/

for(int i=0; i<ROW; ++i) {
  for(int j=0; j<COL; ++j) {
    printf("%3d ", arr[WIDTH * i + j]);
  }
  printf("\n");
}
```


## References
- Map a 2D array onto a 1D array. (n.d.). Stack Overflow. https://stackoverflow.com/questions/2151084/map-a-2d-array-onto-a-1d-array