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

####  `Array.of` & `Array`
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
#### `Array.of` & `Array.prototype.slice.call`
Array.of和下面of的方法处理类似。
```javascript
function of () {
  return Array.prototype.slice.call(arguments)
}

// 也可以这么写
function ArrayOf(){
  return [].slice.call(arguments);
}
```
但是你能直接用`Array.prototype.slice.call`直接替换，他们处理参数有很大区别
```javascript
Array.prototype.slice.call([1, 2, 3]) // [1, 2, 3]
Array.of(1, 2, 3) // [1, 2, 3]
```

#### `Array.of` & `new Array`

我们先看看`new Array`如何生成数组，
```javascript
new Array()
// []
new Array(undefined)
// [undefined]
new Array(1)
// [undefined x 1]
new Array(3)
// [undefined x 3]
new Array(1, 2)
// [1, 2]
new Array(-1)
// RangeError: Invalid array length
```

`Array.of`很好的解决了特殊长度-1的问题。
```javascript
Array.of()
// []
Array.of(undefined)
// [undefined]
Array.of(1)
// [1]
Array.of(3)
// [3]
Array.of(1, 2)
// [1, 2]
Array.of(-1)
// [-1]
```

### Array.from

> Array.from()方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

JavaScript中的“类数组对象”是一个具有长度属性的对象，特别是整数值为零或更高的对象。  
在ES6之前我们需要这样转化成数组
```javascript
// array-like object类似数组的对象，含有length属性
const arrLike = {
    length: 3,
    0: "foo",
    1: "bar"
};

const arr = Array.prototype.slice.call( arrLike );
console.log(arr) // ['foo', 'bar', empty] 虽然浏览器显示的empty,但实际是没有第三个值的，长度为3，第三个值打印出来会是undefined
```
slice()可以用作复制数组
```javascript
const arrLike = {
    length: 3,
    0: "foo",
    1: "bar"
};

const arr = Array.prototype.slice.call( arrLike );
const arr2 = arr.slice()
arr2.push(2)
console.log(arr,arr2); // ['foo', 'bar', empty] ['foo', 'bar', empty, 2]
```

而用ES6的Array.from来操作转换数组和复制的操作，更加优雅简洁。
```javascript
const arrLike = {
    length: 3,
    0: "foo",
    1: "bar"
};

const arr = Array.from(arrLike)
const arr2 = Array.from(arr)
arr2.push(2)
console.log(arr,arr2); // ['foo', 'bar', undefined] ['foo', 'bar', undefined, 2]
```

`Array.from` 可以传三个参数，第一个参数可以是类数组（）或可遍历对象（）。第二个参数是函数。如果map()函数里面用到了this关键字，还可以传入Array.from()的第三个参数，用来绑定this。
```javascript
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```
第二个参数是函数，类似于操作map遍历操作内部数据。
```javascript
Array.from({ length: 3 }); // [ undefined, undefined, undefined ]

Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]

Array.from([1, , 2, , 3], (n) => n || 0)
// [1, 0, 2, 0, 3]
```

只要是部署了 Iterator 接口的数据结构，Array.from()都能将其转为数组。
```javascript
Array.from('hello')
// ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b'])
Array.from(namesSet) // ['a', 'b']

let nameMap = new Map([
  [1,'one'],
  [2,'two'],
  [3,'three']
]);
console.log(Array.from(nameMap)) //   [[1,'one'],[2,'two'],[3,'three']]
```

利用`Array.from`创建四个空值
```javascript
const a = Array( 4 );                             // four empty slots!

const b = Array.apply( null, { length: 4 } );     // four `undefined` values
const c = Array.from( { length: 4 } );            // four `undefined` values
console.log(a,b,c); // [empty × 4] [undefined, undefined, undefined, undefined] [undefined, undefined, undefined, undefined]
```
由于空位的处理规则非常不统一，所以建议避免出现空位。尽量让空位内有值undefined。
```javascript
Array.from( { length: 4 } ) // [undefined, undefined, undefined, undefined]
Array.from( { length: 4 } ,v=>v=1) // [1, 1, 1, 1]
```

# 原型方法

### copyWithin

> 数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
 
```javascript
Array.prototype.copyWithin(target, start = 0, end = this.length)
```

示例1：
```javascript
var items = [1, 2, 3, ,,,,,,,]
items.copyWithin(6, 0, 3) //  [1, 2, 3, empty × 3, 1, 2, 3, empty]
```

示例2：
```javascript
var items = [1, 2, 3, ,,,,,,,]
items.copyWithin(6, 1, 3) // [1, 2, 3, empty × 3, 2, 3, empty × 2]
```

示例3：
```javascript
var items = [1, 2, 3, ,,,,,,,]
items.copyWithin(6, 2, 3) // [1, 2, 3, empty × 3, 3, empty × 3]
```

当参数为负值，如何操作的。
```javascript
[1, 2, 3, ,,,,,,,].copyWithin(-3, 1)
// <- [1, 2, 3, undefined x 4, 2, 3, undefined x 1]
[1, 2, 3, ,,,,,,,].copyWithin(-6, -8)
// <- [1, 2, 3, undefined x 1, 3, undefined x 5]
[1, 2, 3, ,,,,,,,].copyWithin(-3, 1, 2)
// <- [1, 2, 3, undefined x 4, 2, undefined x 2]
```

### fill

> fill() 方法用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为 array.length）内的全部元素。它返回修改后的数组。

```javascript
console.log(['a', 'b', 'c'].fill(0)) // [0, 0, 0]
console.log(new Array(3).fill(0)) // [0, 0, 0]
console.log(['a', 'b', 'c',,,].fill(0, 2)) // ['a', 'b', 0, 0, 0]
console.log(new Array(5).fill(0, 0, 3)) // [0, 0, 0, empty × 2]
console.log(new Array(3).fill({})) // [{}, {}, {}]
console.log(new Array(3).fill(function foo () {})) // [function foo () {}, function foo () {}, function foo () {}]
```
**语法：**
```
fill(value)
fill(value, start)
fill(value, start, end)
```

注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
```javascript
let arr1 = new Array(3).fill({name: "Mike"});
arr1[0].name = "Ben";
console.log(arr1)
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

let arr2 = new Array(3).fill([]);
arr2[0].push(5);
console.log(arr2)
// [[5], [5], [5]]
```

### find

> find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
> 
> 如果需要在数组中找到对应元素的索引，请使用 findIndex()。  
> 如果需要查找某个值的索引，请使用 Array.prototype.indexOf()。（它类似于 findIndex()，但只是检查每个元素是否与值相等，而不是使用测试函数。）  
> 如果需要查找数组中是否存在某个值，请使用 Array.prototype.includes()。同样，它检查每个元素是否与值相等，而不是使用测试函数。  
> 如果需要查找是否有元素满足所提供的测试函数，请使用 Array.prototype.some()。

**语法：**

```javascript
find(callbackFn)
find(callbackFn, thisArg)
```
