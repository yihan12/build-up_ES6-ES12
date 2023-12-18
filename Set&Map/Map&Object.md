# Map的基本方法
它的方法和属性如下：

* new Map() —— 创建 map。
* map.set(key, value) —— 根据键存储值。
* map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
* map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
* map.delete(key) —— 删除指定键的值。
* map.clear() —— 清空 map。
* map.size —— 返回当前元素个数。

# Map和Object的区别

**Map 和 Set 对象包含可按插入顺序迭代的元素。**

> Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键（key）。


### 性能对比
让我们看看Object和Map的寻找对应属性的属性的速度。

```javascript
let obj = {}, map = new Map();
let users = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];

for (let i = 0; i < users.length; i++) {
  obj[i] = i;
  map.set(i, i);
}

let result;

console.time('Object'); 
result = obj.hasOwnProperty("Anne"); 
console.timeEnd('Object');

console.time('Map'); 
result = map.has("Anne"); 
console.timeEnd('Map');

// Object: 0.007080078125 ms
// Map: 0.0029296875 ms
```
这两个集合的性能如下。
```javascript
Object: 0.007080078125 ms
Map: 0.0029296875 ms
```

正如您所见，Map数据结构更灵活、更易于迭代并且性能更高。
