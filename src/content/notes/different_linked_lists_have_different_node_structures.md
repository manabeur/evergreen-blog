---
title: "Different linked lists have different node structures"
description: ''
pubDate: 'Jun 13 2024'
---

Singly Linked List
```cpp
class Node {
	int data;
	int *next{nullptr};

	Node(int value) : data(value) {}
};
```

Doubly and Circular Linked List
```cpp
class Node {
	int data;
	int *prev{nullptr};
	int *next{nullptr};

	Node(int value) : data(value) {}
};
```

XOR Linked List (memory efficient doubly linked list)
```cpp
class Node {
	int data;
	int *pxn{nullptr}; // XOR of previous and next node

	Node(int value) : data(value) {}
};
```