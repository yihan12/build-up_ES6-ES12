# `async/await`函数  

> `Generator`函数的语法糖；  
> 返回一个`Promise` 对象，可以使用`then`方法添加回调函数；  
> 当函数执行的时候，一旦遇到`await`就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。  

async对Generator函数的改进：  
* 1、内置执行器：`async`函数自带执行器；  
* 2、更好的语义：`async...await`比起星号和`yield`，语义更加清楚；  
* 3、更广的适用性；  
* 4、返回值是Promise。  

### 使用  

```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
// 'calling'
// 'resolved'
```

`async`函数返回一个Promise对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。  
```javascript
async function getStockPriceByName(name){
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}
function getStockSymbol(e) {
  console.log(e, 'getStockSymbol');
  return e
}
function getStockPrice(e) {
  console.log(e, 'getStockPrice');
  return e
}
getStockPriceByName('goog').then(function(result){
  console.log(result, 'getStockPriceByName');
})
// 'goog' 'getStockSymbol'
// 'goog' 'getStockPrice'
// 'goog' 'getStockPriceByName'
```

指定多少毫秒后输出一个值  
```javascript
function timeout(ms){
  return new Promise(resolve=>{
    setTimeout(resolve, ms);
  })
}
async function asyncPrint(value, ms){
  await timeout(ms);
  console.log(value);
}
asyncPrint('hello', 3000);
// 'hello'

// 等同于  
async function timeout(ms){
  await new Promise(resolve=>{
    setTimeout(resolve, ms);
  })
}
async function asyncPrint(value, ms){
  await timeout(ms);
  console.log(value);
}
asyncPrint('hello', 3000);
```

`async`函数的多种形式：  
* 函数声明   
```javascript
async function foo(){}
```
* 函数表达式  
```javascript
const foo = async function(){};
```
* 对象的方法  
```javascript
let obj = { async foo() {}};
obj.foo().then(...)
```
* 箭头函数  
```javascript
const foo = async ()=>{};
```
* Class方法  
```javascript
class Strorage{
  constructor(){
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}
const storage = new Storage();
storage.getAvatar('jake').then(
  //...
);
```

返回promise对象  
```javascript
async function f(){
  return 'hello'
}
f().then(v=>console.log(v));
// 'hello'

// async函数抛出错误会导致返回的Promise对象变为reject状态，抛出的对象会被catch的回调函数接收到
async function f1(){
  throw new Error('出错了')
}
f1().then(v=>console.log(v))
.catch(e=>console.log(e));
// Error: 出错了

// 等同于
async function f2(){
  throw new Error('出错了')
}
f2().then(v=>console.log(v),e=>console.log(e))
```
