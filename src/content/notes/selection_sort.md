---
title: "Selection sort"
description: ''
pubDate: 'May 15 2024'
---


```rust
fn selection_sort(nums: &mut Vec<i32>) {
    let n = nums.len();
    
    for i in 0..n-1 {
        let mut min_pos = i;
        let mut min = nums[i];

        for j in i+1..n {
            if nums[j] < min {
                min = nums[j];
                min_pos = j;
            }
        }

        nums[min_pos] = nums[i];
        nums[i] = min;
    }
}
```

- Best / Average / Worst time complexity: **O(N^2)**