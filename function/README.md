# 函数默认值

### ES5、ES6默认参数值对比
```javascript
  function makeRequest(url, timeout, callback) {
    timeout = typeof timeout !== 'undefined' ? timeout : 2000
    callback = typeof callback !== 'undefined' ? callback : function () {}
    console.log(url, timeout, callback)
  }

  function makeRequestEs6(url, timeout = 2000, callback = function () {}) {
    console.log(url, timeout, callback)
  }

  makeRequestEs6('/foo', null, function (body) {}) // '/foo' null ƒ (body) {}
  makeRequest('/foo', null, function (body) {}) // '/foo' null ƒ (body) {}

  makeRequestEs6('/foo') // '/foo' 2000 ƒ (body) {}
  makeRequest('/foo') // '/foo' 2000 ƒ (body) {}
```
ES5和ES6在处理参数为空的情况，都能较好解决，但是，ES5仍需要额外的代码进行默认参数模拟。ES6可以直接利用默认参数值来实现。

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
