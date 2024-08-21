---
title: "[Algorithm] Counting sort"
description: ''
pubDate: 'May 15 2024 18:21'
---

만약 입력으로 주어지는 수의 크기가 제한되어 있다면, counting 정렬을 사용하여 빠르게 정렬할 수 있다.

//

해당 문제에서 입력으로 주어지는 최댓값은 10,000 이고, 입력은 최대 10,000,000 (천 만)까지 들어온다. 
수의 최댓값이 작기 때문에 conuting 정렬을 사용할 수 있다. 

```rust
// arr = [7, 2, 1, 9, 8, 5, 4]
fn counting_sort(arr: &mut Vec<i32>) {
    // you know that the largest value wont exceed 10,000.
    let mut nums: Vec<i32> = vec![0; 10001];

    let n = arr.len();
    for i in 0..n {
        nums[arr[i] as usize] += 1;
    }

    for i in 1..10001 {
        if nums[i] > 0 {
            for _ in 0..nums[i] {
                print!("{} ", i);
            }
        }
    }
    println!();
}
```

입력의 최대 숫자인 10,000의 크기를 가진 배열을 선언하고 각 원소의 값을 0으로 초기화 한다.
입력을 받을 때 마다, 해당 숫자와 동일한 원소의 값을 1만큼 증가시킨다. 이 과정을 입력이 없을때까지 반복한다. 
마지막에 `[1]`번 부터 마지막까지 반복하면서 원소의 값이 0이 아닐때만 출력하면 된다.

각 원소의 `숫자`가 실제 입력된 값에 해당하고, 그 원소가 가지고 있는 값 `[숫자]`가 개수를 의미한다.
예를들어 `[3] = 2`라면, 이는 숫자 `3`이 두 개 있다는 뜻이된다.

- Average-case time complexity: O(M), `M = number of inputs`

## Try to solve
- https://www.acmicpc.net/problem/10989