# 函数默认值

### ES5、ES6模拟默认参数值对比
```javascript
function makeRequest(url, timeout, callback) {
  timeout = typeof timeout !== 'undefined' ? timeout : 2000
  callback = typeof callback !== 'undefined' ? callback : function () {}
}

function makeRequestEs6(url, timeout = 2000, callback = function () {}) {
  console.log(url, timeout, callback)
}

makeRequestEs6('/foo', null, function (body) {}) // '/foo' null ƒ (body) {}
makeRequest('/foo', null, function (body) {}) // '/foo' null ƒ (body) {}

makeRequestEs6('/foo', , function (body) {}) // '/foo' 2000 ƒ (body) {}
makeRequest('/foo', , function (body) {}) // '/foo' 2000 ƒ (body) {}
```
尽管ES5能处理好默认参数值，但是，仍需要额外的代码处理。ES6能直接的处理为空的情况。

> 函数默认值一般放到参数的最后

```javascript
function foo(x,y,z=3){
  console.log(x,y,z)
}
foo(1,2)
```
# 与解构赋值结合

# length的属性

# 作用域

# 函数的name属性
