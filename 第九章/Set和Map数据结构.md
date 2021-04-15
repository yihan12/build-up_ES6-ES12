# 概览  

### `Set`  

> 类似于数组，但是成员的值都是唯一的，没有重复的；  
> `Set`本身是一个构造函数，用来生成`Set`数据结构；  
> 不能区分 +0,-0;  
> 认为NaN不等于NaN;  
> 不能区分对象，认为两个对象总是不相等的；  
> 不能区分数组，认为两个数组总是不相等的；

#### `Set`的基础和数组去重

```javascript
let arr = [2,3,4,5,1,'1',1,undefined,undefined,'undefined',null,NaN,NaN,+0,-0,{},{},[],[]];
function unique(arr){
  return Array.from(new Set(arr))
}
let newArr = unique(arr);
let newArr1 = [...new Set(arr)]
console.log(newArr); // [1, "1", 2, 3, 4, 5, undefined, "undefined", null, NaN, 0, {}, {}, [], []]
console.log(newArr1); // [1, "1", 2, 3, 4, 5, undefined, "undefined", null, NaN, 0, {}, {}, [], []]
// 不能区分 +0,-0;认为NaN不等于NaN;不能区分对象，认为两个对象总是不相等的。不能区分数组，认为两个数组总是不相等的。
console.log(new Set([+0,-0])); //Set(1) {0}

const set = new Set([1,2,3,4]);
console.log(set); // Set(4) {1, 2, 3, 4}
console.log(set.size); // 4
console.log(...set); // 1 2 3 4
```

#### `Set`的属性和方法

```javascript
console.dir(Set);
// ƒ Set()
// arguments: (...)
// caller: (...)
// length: 0
// name: "Set"
// prototype: Set
//   add: ƒ add()
//   clear: ƒ clear()
//   constructor: ƒ Set()
//   delete: ƒ delete()
//   entries: ƒ entries()
//   forEach: ƒ forEach()
//   has: ƒ has()
//   keys: ƒ values()
//   size: (...)
//   values: ƒ values()
//   Symbol(Symbol.iterator): ƒ values()
//   Symbol(Symbol.toStringTag): "Set"
//   get size: ƒ size()
//   __proto__: Object
// Symbol(Symbol.species): (...)
// get Symbol(Symbol.species): ƒ [Symbol.species]()
// __proto__: ƒ ()
// [[Scopes]]: Scopes[0]
```

`Set`的实例属性  

* `Set.prototype.constructor`:构造函数，默认就是Set函数.  
* `Set.prototype.size`:返回Set实例的成员总数.  

`Set`的操作方法  

* `add(value)`:添加某个值，返回Set结构本身  
* `delete(value)`:删除某个值，返回一个布尔值，表示删除是否成功。  
* `has(value)`:返回一个布尔值，表示参数是否为Set的成员  
* `clear()`:清空所有成员，没有返回值

```javascript
const S = new Set();
S.add(1).add(2).add(2);
console.log(S); // Set(2) {1, 2}
console.log(S.size); // 2
console.log(S.has(1)); // true
console.log(S.has(2)); // true
console.log(S.has(3)); // false

S.delete(2);
console.log(S.has(2)); //false
console.log(S.size); // 1

S.clear(); 
console.log(S.size); // 0

// 判断是否包括一个键
const properties = new Set();
properties.add('width');
properties.add('height');
if(properties.has('width')){
  // do something
}

// Array.from()可以将Set结构转换成数组

const items = new Set([1,2,3,4,5]);
const array = Array.from(items);
console.log(items,array); // Set(5) {1, 2, 3, 4, 5} [1, 2, 3, 4, 5]
```

`Set`的遍历操作（用于遍历成员）  

* `keys()`: 返回键名  
* `values()`: 返回键值  
* `entries()`: 返回键值对  
* `forEach()`: 使用回调函数遍历每个成员  

```javascript
let set1 = new Set(['red','green','blue']).add('yellow');
for(let item of set1.keys()){
  console.log(item);
  // red
  // green
  // blue
  // yellow
}
for (let i of set1.values()) {
  console.log(i);
  // red
  // green
  // blue
  // yellow
}
for (let i of set1) {
  console.log(i);
  // red
  // green
  // blue
  // yellow
}
for (let i of set1.entries()) {
  console.log(i);
  // ["red", "red"]
  // ["green", "green"]
  // ["blue", "blue"]
  // ["yellow", "yellow"]
}

let set2 = new Set([1,2,3]);
set2.forEach(value=>console.log(value*2)); 
// 2
// 4
// 6 
```
`...`运算符遍历

```javascript
const setN = new Set([1,2,3]);
let newSetN = new Set([...setN].map(x=>x*2));
console.log(newSetN); // Set(3) {2, 4, 6}

const setM = new Set([1,2,3,4,5]);
let newSetM = new Set([...setM].filter(x=>(x%2===0)));
console.log(newSetM); // Set(2) {2, 4}

const a = new Set([1,2,3]);
const b = new Set([4,2,3]);
const c = new Set([...a,...b]);
console.log(c); // Set(4) {1, 2, 3, 4}
const d = new Set([...a].filter(x=>b.has(x)));
console.log(d); // Set(2) {2, 3}
const e = new Set([...a].filter(x=>!b.has(x)));
console.log(e); // Set(1) {1}
```

### `WeakSet`  

语法：  
```javascript
new WeakSet([iterable]);
WeakSet.prototype.add(value);
WeakSet.prototype.has(value);
WeakSet.prototype.delete(value);
```

和`Set`的区别：  
* 第一，`WeakSet`的成员只能是对象，而不能是其他类型的值；  
* 第二，`WeakSet`中对象都是弱引用，即垃圾回收机制不考虑`WeakSet`对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会回收该对象所占用的内存，不考虑该对象是否还存在于`WeakSet`之中；  
* 第三，`WeakSet`不能对其元素进行迭代，并没有那么多使用情形；  
* 第四，没有size属性。

使用：  
```javascript
let set = new WeakSet();
const class_1 = {}, class_2 = {};
set.add(class_1);
set.add(class_2);
console.log(set) // WeakSet {Object {}, Object {}}
console.log(set.has(class_1)) // true
console.log(set.has(class_2)) // true
```

### `Map`
