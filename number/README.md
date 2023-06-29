# BigInt

> JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制。一是数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整数，JavaScript 是无法精确表示，这使得 JavaScript 不适合进行科学和金融方面的精确计算。二是大于或等于2的1024次方的数值，JavaScript 无法表示，会返回Infinity。  
>
> ES2020 引入了一种新的数据类型 BigInt（大整数），来解决这个问题，这是 ECMAScript 的第八种数据类型。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。
### BigInt类型
ES5: String, Number, Boolean, Null, Undefined  
ES6 Added: Symbol, 6 types  
ES10 added: BigInt, reaching 7 types  

```javascript
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```
### BigInt & Number

过去，不支持大于9007199254740992的整数值。如果超过，该值将简单地锁定为MAX_SAFE_INTEGER+1：

```javascript
const limit = Number.MAX_SAFE_INTEGER;
console.log(limit); // 9007199254740991
console.log(limit+1); // 9007199254740992
console.log(limit+2); // 9007199254740992
console.log(9007199254740993) // 9007199254740992
```
然后我们看看BigInt，BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。
```javascript
const larger = 9007199254740993n;
console.log(larger); // 9007199254740993n
console.log(larger + 1n); // 9007199254740994n
console.log(larger*1000n); // 9007199254740993000n
const largerNum = BigInt(9007199254740992)
const largerNum2 = BigInt(9007199254740993)
const largerStr = BigInt('9007199254740992')
const largerStr2 = BigInt('9007199254740993')
console.log(largerNum, largerNum2, largerStr, largerStr2); // 9007199254740992n 9007199254740992n 9007199254740992n 9007199254740993n
console.log(largerNum === largerStr, largerNum == largerStr, largerNum2===largerStr) // true true true
```
那么看看`0n`&`0`,`1n`&`1`对比如何
```javascript
console.log(1n === 1, 1n == 1);  // false true
console.log(0n === 0, 0n == 0);  // false true
```
从上面式子不能看出BigInt值并不严格等于Number值。也就是不全等。

那两者的大小比较又会如何
```javascript
1n < 2; // true
2n > 1; // true
2 > 2; // false
2n > 2; // false
2n >= 2; // true
```

### BigInt计算

我们再来看看MDN的示例，发现 `+ * - % **` 这些运算符都支持
```javascript
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// 9007199254740991n

const maxPlusOne = previousMaxSafe + 1n;
// 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// 9007199254740993n, this works now!

const multi = previousMaxSafe * 2n;
// 18014398509481982n

const subtr = multi - 10n;
// 18014398509481972n

const mod = multi % 10n;
// 2n

const bigN = 2n ** 54n;
// 18014398509481984n

bigN * -1n;
// -18014398509481984n
```
但是对于除法`/`和数字计算有些区别：
```javascript
const expected = 4n / 2n;
// 2n

const truncated = 5n / 2n;
// 2n, not 2.5n
console.log(expected, truncated); // 2n 2n
```
### BigInt 正负号

BigInt 可以使用负号（-），但是不能使用正号（+），因为会与 asm.js 冲突。
```javascript
-42n // 正确
+42n // 报错
```

### BigInt函数
JavaScript 原生提供BigInt函数，可以用它生成 BigInt 类型的数值。转换规则基本与Number()一致，将其他类型的值转为 BigInt。
```javascript
BigInt(123) // 123n
BigInt('123') // 123n
BigInt(false) // 0n
BigInt(true) // 1n
```
BigInt()函数必须有参数，而且参数必须可以正常转为数值，下面的用法都会报错。
```javascript
new BigInt() // TypeError
BigInt(undefined) //TypeError
BigInt(null) // TypeError
BigInt('123n') // SyntaxError
BigInt('abc') // SyntaxError
```

需要注意的是，BigInt函数无法操作小数以及小数字符串
```javascript
console.log(BigInt(123)); // 123n
BigInt(123.3); // RangeError: The number 123.3 cannot be converted to a BigInt because it is not an integer
BigInt(1.5) // RangeError
BigInt('1.5') // SyntaxError
```

BigInt 继承了 Object 对象的两个实例方法。  

-- `BigInt.prototype.toString()`  
-- `BigInt.prototype.valueOf()`  

它还继承了 Number 对象的一个实例方法。  

-- `BigInt.prototype.toLocaleString()`
```javascript
console.log(typeof Object(1n)); // "object"
console.log(typeof Object(1n).valueOf()); // "bigint"

console.log(1024n.toString());//"1024"
console.log(1024n.toString(2));//"10000000000"
console.log(1024n.toString(16));//"400"

const bigint = 123456789123456789n;

// German uses period for thousands
console.log(bigint.toLocaleString('de-DE'));//"123.456.789.123.456.789"

// Request a currency format
console.log(bigint.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));//  "123.456.789.123.456.789,00 €"
```

此外，还提供了三个静态方法。  

-- `BigInt.asUintN(width, BigInt)`： 给定的 BigInt 转为 0 到 2width - 1 之间对应的值。  
-- `BigInt.asIntN(width, BigInt)`：给定的 BigInt 转为 -2width - 1 到 2width - 1 - 1 之间对应的值。  
-- `BigInt.parseInt(string[, radix])`：近似于Number.parseInt()，将一个字符串转换成指定进制的 BigInt。  

```javascript
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max)
// 9223372036854775807n
BigInt.asIntN(64, max + 1n)
// -9223372036854775808n
BigInt.asUintN(64, max + 1n)
// 9223372036854775808n

const max2 = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(32, max2) // -1n
BigInt.asUintN(32, max2) // 4294967295n

// Number.parseInt() 与 BigInt.parseInt() 的对比
Number.parseInt('9007199254740993', 10)
// 9007199254740992
BigInt.parseInt('9007199254740993', 10)
// 9007199254740993n
```

# Math对象扩展

> ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用。

### Math.trunc()

> Math.trunc（）静态方法通过删除任何小数返回数字的整数部分。

```javascript
console.log(Math.trunc(13.37));//13

console.log(Math.trunc(42.84));//42

console.log(Math.trunc(0.123));//0

console.log(Math.trunc(-0.123));// -0

console.log(Math.trunc("-1.123")); // -1
```
一些特殊的，但是能转成数值的处理
```javascript
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0
```
对于空值和无法截取整数的值，返回NaN。
```javascript
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined) // NaN
```
处理`Infinity/-Infinity`，返回原值。
```javascript
Math.trunc(-Infinity); // -Infinity
Math.trunc(Infinity); // Infinity
```

### Math.sign()
> Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

它会返回五种值。

* 参数为正数，返回+1；
* 参数为负数，返回-1；
* 参数为 0，返回0；
* 参数为-0，返回-0;
* 其他值，返回NaN。

```javascript
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```
如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。
```javascript
Math.sign('')  // 0
Math.sign(true)  // +1
Math.sign(false)  // 0
Math.sign(null)  // 0
Math.sign('9')  // +1
Math.sign('foo')  // NaN
Math.sign()  // NaN
Math.sign(undefined)  // NaN
```

### Math.hypot()

> Math.hypot方法返回所有参数的平方和的平方根。
如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN。
```javascript
Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755
Math.hypot();            // 0
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN
Math.hypot(3, 4, '5');   // 7.0710678118654755
Math.hypot(-3);          // 3
```
### Math.cbrt()
> Math.cbrt()方法用于计算一个数的立方根。

```javascript
Math.cbrt(-1) // -1
Math.cbrt(0)  // 0
Math.cbrt(1)  // 1
Math.cbrt(2)  // 1.2599210498948732
```
对于非数值，Math.cbrt()方法内部也是先使用Number()方法将其转为数值。
```javascript
Math.cbrt('8') // 2
Math.cbrt('hello') // NaN
```

### 32位转换方法
* `Math.clz32()`方法将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导 0。
* `Math.imul`方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
* `Math.fround`方法返回一个数的32位单精度浮点数形式。

### 对数方法
* `Math.expm1(x)`返回 ex - 1，即Math.exp(x) - 1。
* `Math.log1p(x)`方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
* `Math.log10(x)`返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。
* `Math.log2(x)`返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。

### 双曲函数方法
* `Math.sinh(x)` 返回x的双曲正弦（hyperbolic sine）
* `Math.cosh(x)` 返回x的双曲余弦（hyperbolic cosine）
* `Math.tanh(x)` 返回x的双曲正切（hyperbolic tangent）
* `Math.asinh(x)` 返回x的反双曲正弦（inverse hyperbolic sine）
* `Math.acosh(x)` 返回x的反双曲余弦（inverse hyperbolic cosine）
* `Math.atanh(x)` 返回x的反双曲正切（inverse hyperbolic tangent）

# 二进制和八进制表示法

在ES6之前，对于整数的二进制表示，您最好的选择是将它们传递给基数为2的parseInt。
```javascript
parseInt('101', 2) //5
```

> ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。
```javascript
0b111110111 === 503 // true
0o767 === 503 // true
0B111110111 === 503 // true
0O767 === 503 // true
```

ES6延续了对以10为底的数字之外的数字文字表示方式的更改/变化。现在有了官方的八进制形式、修正的十六进制形式和全新的二进制形式。
```javascript
let dec = 42,
    oct = 0o52,         // or `0O52` 
    hex = 0x2a,         // or `0X2a` 
    bin = 0b101010;     // or `0B101010` 
```

用Number处理这些字符串类型会被转化成字符串形式，
```javascript
Number( "42" );         // 42
Number( "0o52" );       // 42
Number( "0x2a" );       // 42
Number( "0b101010" );   // 42
```

那么反过来处理会如何显示：
```javascript
const a = 42;

a.toString();           // "42" -- also `a.toString( 10 )`
a.toString( 8 );        // "52"
a.toString( 16 );       // "2a"
a.toString( 2 );        // "101010"
```
