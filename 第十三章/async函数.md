# `async/await`函数  

> `Generator`函数的语法糖；  
> 返回一个`Promise` 对象，可以使用`then`方法添加回调函数；  
> 当函数执行的时候，一旦遇到`await`就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。  

async对Generator函数的改进：  
* 1、内置执行器：`async`函数自带执行器；  
* 2、更好的语义：`async...await`比起星号和`yield`，语义更加清楚；  
* 3、更广的适用性；  
* 4、返回值是Promise。  

### 语法  

```javascript
```
