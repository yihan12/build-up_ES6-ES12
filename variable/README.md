# 概览  
ES6 新增了两个定义变量的关键字：`let` 与 `const`，它们几乎取代了 ES5 定义变量的方式：`var`。`let`是新的`var`,`const`简单的常量声明。

```javascript
function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      x = "foo";
    }
    // error, already declared in block
    let x = "inner";
  }
}
``` 

# 块级作用域

`let`,`const`创建的变量都是**块级作用域**：它们只存在包围它们的最深代码块中。

作用域有哪些？
* 块级作用域
* 函数作用域
* 全局作用域

```javascript
function func() {
    if (true) {
        let tmp = 123;
        // const tmp = 123;
    }
    console.log(tmp); // ReferenceError: tmp is not defined
}
console.log(tmp);// ReferenceError: tmp is not defined
```  
相比之下，`var`声明的是函数域。

```javascript
function func() {
    if (true) {
        var tmp = 123;
    }
    console.log(tmp); // 123
}
func()
console.log(tmp); // tmp is not defined
```
下面的式子更难看出函数作用域与块级作用域的区别
```javascript
function myFunc(){
    var number1 = 15 // 函数作用域
    if(true){
        let number1 = 20 // 块级作用域
        console.log(number1) // 20

    }
    console.log(number1) // 15
}
myFunc();
console.log(number1) // number1 is not defined
```

而全局作用域，可以从JavaScript程序中的任何位置访问。
```javascript
var number1 = 15 
console.log(window.number1,globalThis.number1,window===globalThis); // 15 15 true
```

**面试题：循环中定时器闭包**  

```javascript
for(var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i) //5, 5, 5, 5, 5
  }, 0)
}
console.log(i) //5 i跳出循环体污染外部函数

//将var改成let之后
for(let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i) // 0,1,2,3,4
  }, 0)
}
console.log(i)//i is not defined i无法污染外部函数
```  
在for循环中使用var声明的循环变量，会跳出循环体污染当前的函数。

# TDZ

> `let`、`const`暂时性死区（temporal dead zone）

`let`,`const`声明的变量拥有**暂时性死区**：当进入它的作用域，它不能被访问（获取或设置）直到执行到达声明。  
简单描述：  
```javascript
if (true) {
  //这块区域是TDZ
  console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization
  let a = 1
  // const a = 1
}
```  
```javascript
if (true) { // enter new scope, TDZ starts
    // Uninitialized binding for `tmp` is created

    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ ends, `tmp` is initialized with `undefined`
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}
```  
下面示例将演示死区（dead zone）是真正短暂时间的（基于时间）和不受空间条件限制（基于位置）  
```javascript
if (true) { // enter new scope, TDZ starts
    const func = function () {
        console.log(myVar); // OK!
    };

    // Here we are within the TDZ and
    // accessing `myVar` would cause a `ReferenceError`

    let myVar = 3; // TDZ ends
    func(); // called outside TDZ
}
```

# 变量提升  

> `var`变量提升  

JavaScript中，我们通常说的作用域是函数作用域，使用var声明的变量，无论是在代码的哪个地方声明的，都会提升到当前作用域的最顶部，这种行为叫做**变量提升（Hoisting）**  

下面代码，演示了函数的变量提升：  
```javascript
{ // Enter a new scope

    console.log(foo()); // hello, due to hoisting
    function foo() {
        return 'hello';
    }
}
```

也就是说，如果在函数内部声明的变量，都会被提升到函数开头，而在全局的声明，就会提升到全局作用域的顶部。  
```javascript
function test() {
    console.log('1: ', a) //undefined
    if (false) {
      var a = 1
    }
    console.log('3: ', a) //undefined
}

test()
```
  
实际执行时，上面的代码中的变量a会提升到函数顶部声明，即使if语句的条件是false，也一样不影响a的提升。
```javascript
function test() {
    var a
    //a声明没有赋值
    console.log('1: ', a) //undefined
    if (false) {
      a = 1
    }
    //a声明没有赋值
    console.log('3: ', a) //undefined
}
```  

在嵌套函数的情况，变量只会提升到最近一个函数的顶部，而不会到外部函数。  
```javascript
//b提升到函数a顶部，但不会提升到函数test。
function test() {
    function a() {
      if (false) {
        var b = 2
      }
    }
    console.log('b: ', b)
}

test() //b is not defined
```  

# 不允许重复声明  

> `let`不允许重复声明  

`let`不允许在相同作用域内，重复声明同一个变量。  
```javascript
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}
```  

因此在函数内部不能重新声明函数  
```javascript
function func(arg) {
  let arg;
}
func() // 报错 Identifier 'arg' has already been declared

function func(arg) {
  {
    let arg;
  }
}
func() // 不报错

```

# const命令  

> const声明一个只读的常量。一旦声明，常量的值就不能改变。

一般使用场景：
```javascript
const start = 'hi all';

const getName = () => {
  return 'jelly';
};

const conf = {
  fav: 'Coding'
};

// 模板
const msg = `${start}, my name is ${getName()}, ${conf.fav} is my favourite`;
```  

你可能不知道的事：  
```javascript
// 1. 与引号混用
const wantToSay = `I'm a "tbfed"`;

// 2. 支持多行文本
const slogan = 
`
I have a dream today!
`;

// 比较适合写HTML
const resultTpl = 
`
  <section>
    <div>...</div>
  </section>
`;
```

> 在JavaScript中，const仅表示绑定（变量名和变量值之间的关联）是不可变的。值本身可能是可变的，如以下示例中的obj。

```javascript
const obj = { prop: 0 };
obj.prop = obj.prop + 1; 
console.log(obj.prop) // 1
```

# 全局变量和全局对象
在Web浏览器中，唯一直接位于该范围内的位置是脚本的顶层。全局范围的变量称为全局变量，可以随处访问。有两种全局变量：

* 全局声明变量是普通变量。
它们只能在脚本的顶层通过const、let和类声明创建。
* 全局对象变量被存储在所谓全局对象的属性中。
它们是在脚本的顶层通过var和函数声明创建的。
可以通过全局变量globalThis访问全局对象，它可以用来创建、读取和删除全局对象变量。
除此之外，全局对象变量像普通变量一样工作。

```javascript
window === globalThis // true

console.log(window.a); // 1
var a = 1 ;
console.log(window.a); // 1
```

# 区别
`var`、`let`和`const`是JavaScript用来存储和声明变量的特殊关键字。它们每个都有唯一性（差异），将简要讨论。

* **相同点**：`var`,`let`,`const`声明的变量，是不能被`delete`的;
* **区别**：  

`var`:   
* var分别具有全局和函数作用域，也就是说，定义在函数外部的变量可以全局访问，定义在特定函数内部的变量只能在函数内部访问。
* 其次，用户可以使用var重新声明变量，用户可以更新var变量。
* 如果用户在声明之前使用var变量，它会使用未定义的值进行初始化，值为undefined。

`let`:  
* let变量的作用域仅为块作用域。它不能在特定功能块之外访问，let关键字是var关键字的改进版本。
* 用户不能重新声明使用let关键字定义的变量，但可以更新它。
* 用户可以使用let关键字在不同的功能块中声明同名变量。
* 无需初始化即可声明。

`const`:  
* const变量的作用域是块作用域。
* 它不能更新或重新声明到范围内
* 没有初始化就不能声明

**变量提升**：`var`声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined；  
`let`,`const`不存在变量提升，即它们声明的变量一定要在声明后使用，否则会报错。  

**暂时性死区**：`var`不存在暂时性死区；`let`、`const`存在暂时性死区，只有等声明变量后，才可以获取和使用该变量。  

**重复声明**：`var`允许重复声明；`lat`、`const`在同一作用域不允许重复声明。  

**修改声明的变量**：`var`和`let`可以修改声明的变量；`const`声明一个只读常量，一旦声明，常量的值就不能改变。

**下一章**：[第二章 模板字符串、字符串新特性](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E4%BA%8C%E7%AB%A0/%E5%AD%97%E7%AC%A6%E4%B8%B2.md)
