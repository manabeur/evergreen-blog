---
title: "Sieve of Eratosthenes"
description: ''
pubDate: 'May 18 2024'
---

The Sieve of Eratosthenes is an algorithm used to find all [[prime numbers]] up to a given value `N`.

The algorithm begins by creating a list of numbers from `2` to `N`. It then iteratively marks the multiples of each prime number as composite (not prime). At the conclusion of the algorithm, the numbers that remain unmarked are the prime numbers within the range.

<!-- ![](Sieve%20of%20Eratosthenes/Sieve_of_Eratosthenes_animation.gif){"width":445} -->

The algorithm follows a set of specific steps:
- List all natural numbers from `2` to `N`.
- Identify the smallest prime number, `p`, among the remaining unprocessed numbers.
- Proceed to eliminate all multiples of `p` from the remaining numbers, excluding `p` itself.
- Repeat steps 2 and 3 until there are no more numbers left to process.

Here is an example of code implementing this algorithm:

```ts
const sieve = (n: number): boolean => {
  const SIZE: number = n + 1
  let arr: boolean[] = new Array(SIZE).fill(true)
  arr[0] = false
  arr[1] = false

  let p = 2
  while (p < SIZE) {
    if (arr[p]) {
      for (let i = p + p; i < SIZE; i += p) {
        arr[i] = false
      }
    }

    p += 1
  }

  return arr[n]
}
```

The Sieve of Eratosthenes algorithm has a time complexity of `O(n log log n)`.