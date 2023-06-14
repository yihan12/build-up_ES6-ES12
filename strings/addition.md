# unicode相关方法

> JavaScript字符串使用UTF-16代码单元表示。每个代码单元可用于表示[U+0000， U+FFFF]范围内的代码点——也称为“基本多语言平面”（BMP）。您可以使用“”语法表示BMP平面中的单个代码点。您还可以使用\x00…\xff表示法表示[U+0000，U+0255]中的代码单元。

例如：表情字符串
```javascript
'\ud83d\udc0e\ud83d\udc71\u2764'
// '🐎👱❤'
```
```javascript
'\ud83d\udc0e\ud83d\udc71\u2764'.length  // 5
'🐎👱❤'.length //5
```
虽然该字符串由5个代码单元组成，但我们知道长度实际上应该是三个-因为只有三个表情符号。

以Object. key为例，仍然有五个代码单元长。
```javascript
console.log(Object.keys('🐎👱❤')) // ['0', '1', '2', '3', '4']
```

用for 循环也得不到自己想要的
```javascript
const text = '🐎👱❤'
for (let i = 0; i < text.length; i++) {
  console.log(text[i])
  // <- '?'
  // <- '?'
  // <- '?'
  // <- '?'
  // <- '❤'
}
```

在ES6中，我们可以使用字符串迭代器来检查代码点。字符串可迭代对象生成的迭代器意识到代码单元循环的这种限制，因此它们会产生代码点。
```javascript
for (let codePoint of '🐎👱❤') {
  console.log(codePoint)
  // <- '🐎'
  // <- '👱'
  // <- '❤'
}
```
```javascript
[...'🐎👱❤'].length // 3
```

# 查找和匹配
