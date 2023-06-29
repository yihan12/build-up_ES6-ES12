### 静态属性和isSafeInteger

- `Number.EPSILON`:ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。
- `Number.MAX_SAFE_INTEGER`:JS数字值中明确表示的最大安全系数整数： 2^53-1
- `Number.MIN_SAFE_INTEGER`:JS数值中明确表示的最小安全系数整数：-（2^53-1）或（-2）^53

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
