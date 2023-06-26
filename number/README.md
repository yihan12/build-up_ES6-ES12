# BigInt

> JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制。一是数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整数，JavaScript 是无法精确表示，这使得 JavaScript 不适合进行科学和金融方面的精确计算。二是大于或等于2的1024次方的数值，JavaScript 无法表示，会返回Infinity。  
>
> ES2020 引入了一种新的数据类型 BigInt（大整数），来解决这个问题，这是 ECMAScript 的第八种数据类型。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。

ES5: String, Number, Boolean, Null, Undefined  
ES6 Added: Symbol, 6 types  
ES10 added: BigInt, reaching 7 types  

```javascript
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```
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
