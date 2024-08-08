---
title: "6k ± 1 Optimization"
description: ''
pubDate: 'May 18 2024'
---

We can optimize the [Primality Test](/notes/primality_test) algorithm by using 6k ± 1. This expression comes from the fact that all [Prime numbers](/notes/prime_numbers), except for 2 and 3, can be expressed in the form of `6K - 1` or `6K + 1`.

- 6k
- 6K + 1 & 6K - 1
- 6k + 2 & 6k - 2
- 6k + 3 & 6k - 3
- 6k + 4 & 6k - 4
- 6k + 5 & 6k - 5

When `k = 1`, the values become:

- 6k → 6
- 6k ± 1 → 7 & 5
- 6k ± 2 → 8 & 4
- 6k + 3 → 9
- 6k + 4 → 10

From these values, we observe that `6k`, `6k ± 2`, `6k + 3`, and `6k + 4` are all divisible by 2 or 3, and thus cannot be prime. This leaves us with `6k ± 1`. Therefore, we can optimize our algorithm by only checking the values of `6K - 1` and `6K + 1`.

```ts
const isPrime = (k: number): boolean => {
  if (k <= 1) return false
  if (k === 2 || k === 3) return true
  if (k % 2 === 0 || k % 3 === 0) return false

  for (let i = 5; i * i <= k; i += 6) {
    if (k % i === 0 || k % (i + 2) === 0) return false
  }

  return true
}
```

The time complexity of this optimize algorithm is `O(sqrt(N))`.
