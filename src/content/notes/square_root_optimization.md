---
title: "Square Root Optimization"
description: ''
pubDate: 'May 18 2024 13:01'
---

To achieve a more efficient [primality test](/notes/primality_test) algorithm, we can limit our checks to numbers up to the square root of `n`.

If `n` is not a prime number, it can be represented as a product of two factors, `p` and `q`. At least one of these factors will be less than or equal to the square root of `n`.

```ts
const isPrime = (n: number): boolean => {
  if (n === 2) return true
  if (n % 2 === 0) return false
  const UPPER_BOUND = Math.sqrt(n)

  for (let i = 3; i <= UPPER_BOUND; i += 2) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}
```

The time complexity of this algorithm is `O(sqrt(N))`. We can further optimize the algorithm by leveraging the properties of `6K-1` and `6K+1` ([6k ± 1 Optimization](/notes/6k_plus_minus_1_optimization)).