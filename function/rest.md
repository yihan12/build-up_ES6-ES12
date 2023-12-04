# Rest 参数

> 剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

# 语法
```javascript
function(a, b, ...theArgs) {
  // ...
}
```

# 示例
```javascript
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```
