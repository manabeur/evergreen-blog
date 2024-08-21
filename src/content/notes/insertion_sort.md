---
title: "[Algorithm] Insertion sort"
description: ''
pubDate: 'May 15 2024 18:23'
---

```rust
fn insertion_sort(nums: &mut Vec<i32>) {
    let n = nums.len();
    for i in 1..n {
        let key = nums[i];
        let mut j = i;

        while j > 0 && nums[j-1] > key {
            nums[j] = nums[j - 1];
            j -= 1;
        }
        nums[j] = key;
    }
}
```

- Best-case time complexity: O(N)
- Average / Worst-case time complexity: O(N^2)
