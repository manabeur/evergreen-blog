---
title: "Convert roman numerals to integer"
description: ''
pubDate: 'May 15 2024 18:24'
---

[Roman numerals](/notes/roman_numerals) are numbers represented by series of designated symbols like `I`, `V`, `X`, etc...

We can implement a function to convert roman numerals to an integer. There are many different ways to implement it. One simple method is to use `if` and `switch` statements.

We can also use a [[hash map]] to implement it.

```cpp
int romanToInt(string s) {
	map<char, int> m;
	m['I'] = 1;
	m['V'] = 5;
	m['X'] = 10;
	m['L'] = 50;
	m['C'] = 100;
	m['D'] = 500;
	m['M'] = 1000;

	int ans = 0;
	const int SIZE = s.size();

	for(int i=0; i<SIZE-1; ++i) {
		if(m[s[i]] < m[s[i+1]]) { 
  			ans -= m[s[i]];
		} else {
		  ans += m[s[i]];
    		}
	}

	return ans + m[s.back()];
}
```

In roman numerals, numbers are generally in increasing order. For example, the number `125`  is written as `100 + 20 + 5` which is `CXXV`. But there are times when this _rule_ breaks. That's when dealing with numbers like `4 (IV)`, `9 (IX)`, `40 (XL)`, `90 (XC)`, and so on.. They are represented using two symbols and 1st symbol's value is subtracted from the 2nd symbol. 

Using this fact, you can check if 1st symbol is smaller than the 2nd symbol and if it is, subtract smaller value from it.
```cpp
for(int i=0; i<SIZE-1; ++i) {
	if(m[s[i]] < m[s[i+1]]) { 
  		ans -= m[s[i]];
	} else {
  		ans += m[s[i]];
	}
}
```

## Try to solve
- [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)
