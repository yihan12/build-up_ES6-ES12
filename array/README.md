# 扩展运算符（spread）
> 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

```javascript
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```

# 静态方法
- `Array.of`: 用于将一组值，转换为数组。
- `Array.from`: 用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

### Array.of
Array()传入数字会生成空的长度为3的数组。Array.of()不仅可以将某个数值变为数组，也可以将一组值变为数组。我们通过下面的代码看看他们的区别
```javascript
const a = Array( 3 );
a.length;                       // 3
a[0];                           // undefined

const b = Array.of( 3 );
b.length;                       // 1
b[0];                           // 3

const c = Array.of( 1, 2, 3 );
c.length;                       // 3
c;                              // [1,2,3]
```

不难看出，Array.of完美弥补了Array()的不足，能快速生成你想要的数组。
```javascript
let a = Array() // []
let b = Array(3) // [, , ,]
let c = Array(3, 11, 8) // [3, 11, 8]

Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]
```
