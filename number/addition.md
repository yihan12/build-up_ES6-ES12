### 静态属性和isSafeInteger

- `Number.EPSILON`:ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。
- `Number.MAX_SAFE_INTEGER`:JS数字值中明确表示的最大安全系数整数： 2^53-1
- `Number.MIN_SAFE_INTEGER`:JS数值中明确表示的最小安全系数整数：-（2^53-1）或（-2）^53

#### `Number.EPSILON`
```javascript
Number.EPSILON === Math.pow(2, -52)
// true
Number.EPSILON
// 2.220446049250313e-16
Number.EPSILON.toFixed(20)
// "0.00000000000000022204"
```
#### `Number.MAX_SAFE_INTEGER`&`Number.MIN_SAFE_INTEGER`
```javascript
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1
// true
Number.MAX_SAFE_INTEGER === 9007199254740991
// true

Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER
// true
Number.MIN_SAFE_INTEGER === -9007199254740991
// true
```
#### `Number.isSafeInteger`
```javascript
Number.isSafeInteger('a') // false
Number.isSafeInteger(null) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(Infinity) // false
Number.isSafeInteger(-Infinity) // false

Number.isSafeInteger(3) // true
Number.isSafeInteger(1.2) // false
Number.isSafeInteger(9007199254740990) // true
Number.isSafeInteger(9007199254740992) // false

Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false

```
### Number.isNaN

> Number.isNaN()用来检查一个值是否为NaN。如果参数类型不是NaN，Number.isNaN一律返回false。

```javascript
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
```
而ES5的isNaN方法，首先转换通过Number传递给它的值。下面的示例产生不一致的结果
```javascript
isNaN('ponyfoo') // true

isNaN(new Date())// false
```

isNaN()和Number.isNaN()区别：  

- `isNaN(value)` 是判断Number（value）转换后的值是否为NaN;`Number.isNaN(value)`是判断value。

我们可以通过Number.isNaN()来判断value是否为数字类型
```javascript
function isNumber (value) {
  return typeof value === 'number' && !Number.isNaN(value)
}

isNumber(1)// true
isNumber(Infinity)// true
isNumber(NaN)// false
isNumber('ponyfoo')// false
isNumber(new Date())// false
```

### `Number.isFinite`

我们先看看`isFinite`的示例：
```javascript
isFinite(NaN) // false
isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(null) // true, because Number(null) is 0
isFinite('10') // true, because Number('10') is 10
```

