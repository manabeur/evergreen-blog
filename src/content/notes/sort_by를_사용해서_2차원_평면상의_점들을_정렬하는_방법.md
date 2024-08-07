---
title: "sort_by를 사용해서 2차원 평면상의 점들을 정렬하는 방법"
description: ''
pubDate: 'Mar 17 2024'
---


> 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.


```rust
xy.sort_by(|a, b| match (a, b) {
	(a, b) if a.0 < b.0 => Ordering::Less,
	(a, b) if a.0 == b.0 && a.1 < b.1 => Ordering::Less,
	_ => Ordering::Greater,
});
```

## Reference
- from solving this problem [좌표 정렬하기](https://www.acmicpc.net/problem/11650)