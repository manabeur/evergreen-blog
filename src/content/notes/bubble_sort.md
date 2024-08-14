---
title: "Bubble sort"
description: ''
pubDate: 'May 15 2024 18:20'
---

```rust
fn bubble_sort(nums: &mut Vec<i32>) {
    let n = nums.len();

    for i in 0..n {
        let mut already_sorted = true;

        for j in 0..n-i-1 {
            let j = j as usize;
            if nums[j] > nums[j+1] {
                already_sorted = false;
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }

        if already_sorted {
            break;
        }
    }
}
```

- Best-case time complexity: O(N)
- Average / Worst-case time complexity: O(N^2)