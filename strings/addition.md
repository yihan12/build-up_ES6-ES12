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

### String.prototype.codePointAt
> ES6 提供了codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。

```javascript
'\ud83d\udc0e\ud83d\udc71\u2764'.codePointAt(0)
// 128014
'\ud83d\udc0e\ud83d\udc71\u2764'.codePointAt(2)
// 128113
'\ud83d\udc0e\ud83d\udc71\u2764'.codePointAt(4)
// 10084

for (let codePoint of '\ud83d\udc0e\ud83d\udc71\u2764') {
  console.log(codePoint.codePointAt(0))
  // 128014
  // 128113
  // 10084
}
```

点运算+map
```javascript
[...'\ud83d\udc0e\ud83d\udc71\u2764'].map(cp => cp.codePointAt(0))
// [128014, 128113, 10084]
```

然后，您可以使用新的unicode代码点转义语法\u{codePoint}将这些以10为底的整数的十六进制（base-16）表示并将它们呈现在字符串上。此语法允许您表示超出“基本多语言平面”（BMP）的unicode代码点，即通常使用语法表示的[U+0000， U+FFFF]范围之外的代码点。
```javascript
for (let codePoint of '\ud83d\udc0e\ud83d\udc71\u2764') {
  let a = codePoint.codePointAt(0).toString(16)
  console.log(a)
  // '1f40e'
  // '1f471'
  // '2764'
}
console.log('\u{1f40e}') // 🐎
console.log('\u{1f471}') // 👱
console.log('\u{2764}') // ❤
```

### String.fromCodePoint
> ES5 提供String.fromCharCode()方法，用于从 Unicode 码点返回对应字符，但是这个方法不能识别码点大于0xFFFF的字符。 ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。

请注意，我如何将0x前缀与我们刚才从. codePointAt获得的简洁的以16为底的代码点一起使用。

```javascript
String.fromCodePoint(0x1f40e)
// '🐎'
String.fromCodePoint(0x1f471)
// '👱'
String.fromCodePoint(0x2764)
// '❤'
```
显然，你也可以使用他们的以10为底的对应物来达到同样的结果。
```javascript
String.fromCodePoint(128014)
// '🐎'
String.fromCodePoint(128113)
// '👱'
String.fromCodePoint(10084)
// '❤'

String.fromCodePoint(128014, 128113, 10084) // '🐎👱❤'
```
fromCodePoint + codePointAt
```javascript
String.fromCodePoint(...[
  ...'\ud83d\udc0e\ud83d\udc71\u2764'
].map(cp => cp.codePointAt(0))) // '🐎👱❤'
```

### String.prototype.normalize

> ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。

```javascript
'mañana' === 'mañana' // false

'mañana'.length
// 6
'mañana'.length
// 7
```
normalize操作这两个字符串后：
```javascript
'mañana'.normalize() === 'mañana'.normalize()

function compare (left, right) {
  return left.normalize() === right.normalize()
}

console.log(compare('mañana','mañana' )) // true
compare(
  '\x6d\x61\xf1\x61\x6e\x61',
  '\x6d\x61\x6e\u0303\x61\x6e\x61'
)// true
```


# 查找和匹配
