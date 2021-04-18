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

> JavaScript的对象本质上是键值对的集合（Hash结构）,但是只能用字符串作为键；  
> `Map`类似于对象，也是键值对集合，各种类型的值（包括对象）都能当做键；  
> +0,-0`Map`视为一个键；  
> `NaN`,`NaN` `Map`视为一个键；  

```javascript
const m = new Map();
const o = {p:'hello world'};
m.set(o, 'content');
console.log(m.size); // 1
console.dir(m); // Map(1)
console.log(m.get(o)); // 'content'
console.log(m.has(o)); // true
m.delete(o)
console.log(m.has(o)); // false
```  

#### 创建`Map`  

```javascript
const mapOne = new Map([
  [1,'one'],
  [2,'two'],
  [3,'three']
]);
const mapTwo = new Map()
.set(1,'one')
.set(2,'two')
.set(3,'three');
console.log(mapOne,mapTwo); // Map(3) {1 => "one", 2 => "two", 3 => "three"} Map(3) {1 => "one", 2 => "two", 3 => "three"}
```  

#### `Map` 的基础用法

```javascript
const map = new Map([
  ['name','张三'],
  ['title','author']
]);
console.log(map); // Map(2) {"name" => "张三", "title" => "author"}
console.log(map.size); // 2
console.log(map.has('name')); // true
console.log(map.get('name')); // '张三'
console.log(map.has('title')); // true
console.log(map.get('title')); // 'author'

const items = [['name','张三'],['title','author']];
const mapItems = new Map();
items.forEach(
  ([key,value]) => mapItems.set(key,value)
)
console.log(mapItems); // Map(2) {"name" => "张三", "title" => "author"}
```

#### 各类Map的键  

* NaN  
```javascript
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
const mapNaN = new Map().set(NaN,'NaN123');
console.log(mapNaN.get(NaN)); // 'NaN123'
```  

* +0,-0  
```javascript
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // true
const map00 = new Map().set(+0,'000');
console.log(map00.get(-0)); // '000'
```  

* {}  
```javascript
console.log(new Map().set({},1).set({},2).size); // 2
```

* []  
```javascript
console.log(new Map().set([],1).set([],2).size); // 2
```  

* true,false,null,undefined,'true'  
```javascript
const mapAll = new Map();
mapAll.set(true,true).set('true','true').set(undefined,1).set(null,2);
console.log(mapAll.get(true),mapAll.get('true'),mapAll.get(undefined),mapAll.get(null)); // true 'true' 1 2
```

**注意：不存在的属性键返回undefined**  
```javascript
console.log(new Map().get('abcsdff')); // undefined
```  

**注意：不仅仅是数组，任何具有Iterator接口且每个成员都是一个双数组的数据结构都可以当作Map构造函数的参数。**  
```javascript
const set = new Set([['foo',1],['bar',2]]);
const m1 = new Map(set);
console.log(m1.get('foo')); // 1
```  

**注意：对同一个键赋值，后面的值会覆盖前面的值**  
```javascript
 const mapNew = new Map();
mapNew.set(1, 'aaa').set(1, 'bbb');
console.log(mapNew.get(1)); // 'bbb'
console.log(mapNew.get('11dasda')); // undefined
```  

**注意：只有对同一对象的引用，Map结构才将其视为同一个键。**  
```javascript
const mapA = new Map()
mapA.set(['a'], 555);
console.log(mapA.get(['a'])); // undefined

let aa = ['a'];
mapA.set(aa, 555);
console.log(mapA.get(aa)); // 555
```  

**注意：同样的值的两个实例在Map结构中被视为两个键，简单类型值除外（数字，字符串，布尔值）**  
```javascript
const mapSame = new Map();
const k1 = ['a'];
const k2 = ['a'];
mapSame.set(k1,111).set(k2,222);
console.log(mapSame.get(k1),mapSame.get(k2)); // 111 222

const k3 = {a:1};
const k4 = {a:1};
mapSame.set(k3,123).set(k4,234);
console.log(mapSame.get(k3),mapSame.get(k4)); // 123 234

const k5 = 1;
const k6 = 1;
mapSame.set(k5,456).set(k6,789);
console.log(mapSame.get(k5),mapSame.get(k6)); // 789 789
```

#### `Map`的属性、操作方法、遍历方法  

> `size`：返回Map结构的成员总数；  
> `set(key,value)`:设置key所对应的键值，然后返回整个Map结构；如果key已经优质，则键值会被更新，否则就新生成改键；  
> `get(key)`:读取key所对应的键值，如果找不到key，则返回undefined；  
> `has(key)`:返回一个布尔值，表示某个键是否在Map数据结构中；  
> `delete(key)`:删除某个键，返回true，如果失败，则返回false；  
> `clear()`: 清空所有成员，没有返回值；    
```javascript
const map = new Map([
  [false,'no'],
  [true,'yes'],
  [undefined,1],
  [null,2],
  [NaN,3],
  [+0,4],
  [{},5],
  [[],6]
])
console.log(map);
// Map(8) 
//   [[Entries]]
//   0: {false => "no"}
//   1: {true => "yes"}
//   2: {undefined => 1}
//   3: {null => 2}
//   4: {NaN => 3}
//   5: {0 => 4}
//   6: {Object => 5}
//   7: {Array(0) => 6}
//   size: 8
//   __proto__: Map
console.log(map.size); // 8
map.set(NaN,33).set(-0, 44).set({},55).set([],66);
console.log(map);
// Map(10) 
//   [[Entries]]
//   0: {false => "no"}
//   1: {true => "yes"}
//   2: {undefined => 1}
//   3: {null => 2}
//   4: {NaN => 33}
//   5: {0 => 44}
//   6: {Object => 5}
//   7: {Array(0) => 6}
//   8: {Object => 55}
//   9: {Array(0) => 66}
//   size: 10
//   __proto__: Map
console.log(map.size); //10
console.log(map.get(false)); // 'no'
console.log(map.get(true)); // 'yes'
console.log(map.get(null)); // 2
console.log(map.get(undefined)); // 1
console.log(map.get(0)); // 44
console.log(map.get({})); // undefined
console.log(map.get([])); // undefined
console.log(map.get('abcdef')); // undefined

console.log(map.has(false)); //true
console.log(map.has(true)); //true
console.log(map.has(0)); //true
console.log(map.has(NaN)); //true
console.log(map.has({})); //false
console.log(map.has([])); //false
console.log(map.has('abcdef')); //false

map.set(undefined,11).set(null,22).set(true,'yesyes').set(false,'nono');
console.log(map.get(undefined)); // true
console.log(map.get(null)); // 22
console.log(map.get(true)); // 'yesyes'
console.log(map.get(false)); // 'nono'
map.delete(undefined);
map.delete(null);
map.delete(true);
console.log(map.get(undefined)); // undefined
console.log(map.get(null)); // undefined
console.log(map.get(true)); // undefined
console.log(map.get(false)); // 'nono'

console.log(map.size); // 7
map.clear(); 
console.log(map.size); // 0
```  

> `keys()`:返回键名；  
> `values()`:返回键值；  
> `entries()`:返回所有成员；  
> `forEach()`:返回Map所有成员；  
```javascript
const map = new Map()
.set(1,'one')
.set(2,'two')
.set(3,'three')

for (const key of map.keys()) {
  console.log(key);
  // 1
  // 2
  // 3
}

for (const value of map.values()) {
  console.log(value);
  // 'one'
  // 'two'
  // 'three'
}

for (const [key,value] of map.entries()) {
  console.log(key,value);
  // 1 'one'
  // 2 'two'
  // 3 'three'
}

for (const [key,value] of map) {
  console.log(key,value);
  // 1 'one'
  // 2 'two'
  // 3 'three'
}

console.log([...map.keys()]); // [1,2,3]
console.log([...map.values()]); // ['one','two','three']
console.log([...map.entries()]); // [[1,'one'],[2,'two'],[3,'three']]
console.log([...map]); // [[1,'one'],[2,'two'],[3,'three']]

map.forEach((value,key,map)=>{
  console.log(key,value); 
  // 1 'one'
  // 2 'two'
  // 3 'three'
})

// forEach方法还能接收第二个参数，用于绑定this
const reporter = {
  report:(key,value)=>{
    console.log(key,value);
    // 1 'one'
    // 2 'two'
    // 3 'three'
  }
}
map.forEach(function(value,key,map){
  this.report(key,value)
},reporter)

const map1 = new Map(
  [...map].filter(([k,v])=>k<3)
)
console.log(map1); // Map(2) {1 => "one", 2 => "two"}

const map2 = new Map(
  [...map].map(([k,v])=>[k*2,"_"+v])
)
console.log(map2); // Map(3) {2 => "_one", 4 => "_two", 6 => "_three"}
```

#### 与其他数据结构互相转换  


