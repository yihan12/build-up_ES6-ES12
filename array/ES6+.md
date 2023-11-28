# includes

> includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。

```javascript
console.log([1,2,3].includes(2)); // true
console.log([1,2,3].includes(4)); // false
console.log([1,2,NaN].includes(NaN)); // true

// 第二个参数表示搜索的起始位置，默认为0。如果为负数，则表示倒数的位置，如果这时大于数组的长度则会重置为从0开始
console.log([1,2,3].includes(2,-4)); // true
console.log([1,2,3].includes(2,-3)); // true
console.log([1,2,3].includes(2,-2)); // true
console.log([1,2,3].includes(2,-1)); // false
console.log([1,2,3].includes(2,0)); // true
console.log([1,2,3].includes(2,1)); // true
console.log([1,2,3].includes(2,2)); // false
console.log([1,2,3].includes(2,3)); // false
console.log([1,2,3].includes(2,4)); // false
```
