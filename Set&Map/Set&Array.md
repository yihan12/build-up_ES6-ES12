# Set的基本方法

> Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

它的主要方法如下：

- `new Set(iterable)` —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
- `set.add(value)` —— 添加一个值，返回 set 本身
- `set.delete(value)` —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
- `set.has(value)` —— 如果 value 在 set 中，返回 true，否则返回 false。
- `set.clear()` —— 清空 set。
- `set.size` —— 返回元素个数。


# Set和Array的区别

```javascript
let arr = [], set = new Set();
let users = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];

for (let i = 0; i < users.length; i++) {
  arr.push(users[i]);
  set.add(users[i]);
}

let result;

console.time('Array'); 
result = arr.indexOf("Anne") !== -1; 
console.timeEnd('Array');

console.time('Set'); 
result = set.has("Anne"); 
console.timeEnd('Set');

// Array: 0.0029296875 ms
// Set: 0.0009765625 ms
```

直接在您的控制台中运行此代码。结果如下：
```javascript
Array: 0.0029296875 ms
Set: 0.0009765625 ms
```
这里差别很小，但是Set更快，如果你对大数据集进行这样的操作，后面的Set是更好的选择。
