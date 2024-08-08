---
title: "Primality Test"
description: ''
pubDate: 'May 18 2024'
---


Primality test is an algorithm to determine whether an input number is a [prime](/notes/prime_numbers).

One way to check if a number is prime is to iterate from `2` to `n-1` and try dividing `n` by each number. If there is a number that divides `n` without a remainder, then `n` is not prime.

The following code demonstrates this algorithm implemented in TypeScript:

```ts
const isPrime = (n: number): boolean => {
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}
```

The time complexity of this algorithm is `O(N)`, which is not too bad, but there is room for further optimization. One way to reduce the number of operations is to exclude even numbers, as all prime numbers (except 2) are odd.

```ts
const isPrime = (n: number): boolean => {
  if (n === 2) return true
  if (n % 2 === 0) return false

  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}
```

While we have reduced the number of operations, this algorithm still has a linear time complexity. 

There are several other ways to implement the algorithm to enhance the performance. Either [square root optimization](/notes/square_root_optimization) or [6k ± 1 optimization](/notes/6k_plus_minus_1_optimization)  can be used to find the primes in `O(sqrt(N))`. Another way is to use the [Sieve of Eratosthenes](/notes/sieve_of_eratosthenes). It is a bit more complex to implement it, but this algorithm has a time complexity of `O(n log log n)`.