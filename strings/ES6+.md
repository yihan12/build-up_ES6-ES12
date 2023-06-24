# 概览
ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。

ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。

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
