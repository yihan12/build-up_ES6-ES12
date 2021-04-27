# 预览  

### 含义： 

> `Promise`是一部编程的一种解决方案————回调函数和事件————更合理且更强大。  
> `Promise`对象是一个构造函数，用来生产`Promise`实例。  
> `Promise`提供统一的API,各种一部操作都可以用同样的方法进行处理。  

场景：  
> 回调地狱：回调嵌套过多，代码繁琐。  

特点：  
* 本质还是回调函数。  
* 区分成功失败的回调，省去嵌套在内层的嵌套逻辑。  
* 可以很轻松的完成回调函数模式到Promise模式的转化。  
* 代码由回调函数嵌套的横向扩展，变为链式调用的纵向扩展，易于理解和维护。  
* 对象的状态不受外界的影响。`Promise`三种状态：Pending（进行中）、Fulfilled（已成功）、Rejected（已失败）。  
* 一旦状态改变就不会再变。`Promise`状态改变的两种可能：从`Pending`变为`Fulfilled`、从`Pending`变为`Rejected`。  

**注意：无法取消`Promise`，一旦新建它就会立即执行，无法中途取消；如果不设置回调函数，`Promise`内部抛出的错误不会反应到外部；当处于`Pending`状态时，无法得知目前进展到哪一阶段（刚刚开始还是即将完成）。**    

`Promise`构造函数接受一个参数：函数，并且这个函数需要传入两个参数：  
> `resolve`函数: 将`Promise`对象的状态从未完成变为成功（即从`Pending`变为`Resolved`），在异步成功时调用，并将异步成功的结果作为参数传递出去；  
> `reject`函数：将`Promise`对象的状态从未完成变为失败（即从`Pending`变为`Rejected`），在异步操作失败时调用，并将异步操作失败报出的错误作为参数传递出去。

### 基本用法

就比如如下式的执行顺序，依次打印出的结果：  
```javascript
function timeout(ms){
  return new  Promise((resolve, reject)=>{
    setTimeout(resolve, ms, 'done')
  })
}
timeout(100).then(value=>{
  console.log(value);
})

// Promise新建后就会立即执行
let promise = new Promise(function(resolve, reject){
  console.log('Promise1');
  resolve();
  console.log('Promise2');
})
promise.then(function(){
  console.log('Resolved.');
})
console.log('hi');
// Promise
// hi 
// Resolved
// done
```  
从上式中不难看出，**Promise新建后就会立即执行；Promise构造函数是同步的，promise.then中的函数是一步执行的。**  

#### `Promise.prototype.then()`  

> 接受两个参数：1.第一个参数是`Resolved`状态的回调函数；2.第二个参数（可选）是`Rejected`状态的回调函数。  
> 一般来说，不要在then方法中定义`Rejected`状态的回调函数（即then的第二个参数），而应总是使用catch方法。

#### `Promise.prototype.catch()`  

> 和then的第二个参数一样，用来指定`Rejected`的回调。  
> 在执行`Resolved`状态的回调函数时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到catch方法中。  

```javascript
let p = new Promise(function(resolve, reject){
  resolve(111);
})
p.then(data=>{
  console.log('resolved',data); // resolved 111
  console.log(sData); // 
}).catch(err=>{
  console.log('rejected',err); // rejected ReferenceError: sData is not defined
})
```

#### `Promise.all()`  

> 多个`Promise`实例包装成一个新的`Promise`实例。  


