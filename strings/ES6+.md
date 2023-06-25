# 概览
ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。

ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。

ES2020 增加了String.prototype.matchAll()方法，可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组。

### padStart & padEnd
> padStart()用于头部补全（左侧）  
> padEnd()用于尾部补全(右侧)

```javascript
'cat'.padStart(5);         // '  cat'
'cat'.padStart(5, 'a');    // 'aacat'

'cat'.padEnd(5);         // 'cat  '
'cat'.padEnd(5, 'a');    // 'cataa'
```
上面代码中，padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。

如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。
```javascript
'cat'.padStart(1, 'a');    // 'cat'

'cat'.padEnd(1, 'a');    // 'cat'
```
如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
```javascript
'cat'.padStart(5, 'abc');  // 'abcat'

'cat'.padEnd(5, 'abc');  // 'catab'
```
如果省略第二个参数，默认使用空格补全长度。
```javascript
'cat'.padStart(5);         // '  cat'

'cat'.padEnd(5);         // 'cat  '
```

### trimStart & trimEnd

我们已经有了trim（）函数。它删除字符串中的空格。现在新添加的是trimStart（）和trimEnd（）函数，它们帮助您选择字符串的哪一部分需要修剪。

```javascript
const mySample = “ &nbsp;&nbsp;&nbsp;Hey medium “;
console.log(mySample.trimStart());
// “Hey medium&nbsp;&nbsp; “;
console.log(mySample.trimEnd());
// “ &nbsp;&nbsp;&nbsp;Hey There”;
```

除了空格键，这两个方法对字符串头部（或尾部）的 tab 键、换行符等不可见的空白符号也有效。  

浏览器还部署了额外的两个方法，trimLeft()是trimStart()的别名，trimRight()是trimEnd()的别名。
```javascript
String.prototype.trimLeft.name === "trimStart"; // true
String.prototype.trimRight.name === "trimEnd"; // true
```

### matchAll

> 给定一个字符串和一个正则表达式，matchAll（）返回所有匹配项的匹配对象的迭代器。

我们先看下match如何匹配的
```javascript
let string = "Hello";
let matches = string.match(/l/);
console.log(matches); // "l"
['l', index: 2, input: 'Hello', groups: undefined]
```
带有正则表达式和 /g标志的String. match确实返回多个匹配项：
```javascript
let string = "Hello";
let matches = string.match(/l/g);
console.log(matches); // "l"
['l', 'l']
```
虽然输出了多个匹配项，明显结果不一样。
```javascript
let iterator = "hello".matchAll(/[el]/g);
for (const match of iterator)
    console.log(match);
// ['e', index: 1, input: 'hello', groups: undefined] // Iteration 1
// ['l', index: 2, input: 'hello', groups: undefined] // Iteration 2
// ['l', index: 3, input: 'hello', groups: undefined] // Iteration 3
```

```javascript
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

```
