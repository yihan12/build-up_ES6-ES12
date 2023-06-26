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


