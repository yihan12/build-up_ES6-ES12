# build-up_ES6-ES12  

JavaScript是目前世界上最常用的编程语言之一，被用于不同的平台，从网络浏览器、移动设备、虚拟现实、网络服务器等。尽管与其他编程语言相比，该语言多年来没有太大变化，但一些变化值得注意。  

一般来说，完整的JavaScript包括以下几个部分：  
* ECMAScript，描述了该语言的语法和基本对象；
* 文档对象模型（DOM），描述处理网页内容的方法和接口；
* 浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口。

2015年6月，ECMAScript的第6个版本推出，这是我们称之为ES2015或ES6的javascript的最大转变。学习ES6很重要，因为一个原因是它使JavaScript更好、更易于编写，而且ES6还与当今的现代Web技术（如React、Vue、Node. js等）一起使用。

ES6（ECMAScript 6）是JavaScript的一种新的标准，也被称为JavaScript的下一代标准。它在2015年正式发布，为JavaScript带来了许多新的特性和语法糖，使得JavaScript更加强大和易于使用。以下是一些重要的ES6特性和语法：

* 类
* 模块化
* 箭头函数
* 函数参数默认值
* 模板字符串
* 解构赋值
* 扩展操作符
* 对象属性简写
* Promise
* let 与 const

以上是ES6的一些重要特性和语法，深入了解ES6可以使得JavaScript开发更加高效和愉快。 ES6为JavaScript带来了许多新的特性和语法糖，使得JavaScript更加强大和易于使用。因此，对于JavaScript开发者来说，深入了解ES6是非常重要的。

下面是ES6的一些笔记，如果对ES6的知识有所吸收，希望点下star。

* **[第一章 变量](https://github.com/yihan12/build-up_ES6/blob/main/variable/README.md)**
  * [`let`、`const`实现块级作用域](https://github.com/yihan12/build-up_ES6/blob/main/variable#块级作用域)
  * [`let`、`const`暂时性死区（temporal dead zone）](https://github.com/yihan12/build-up_ES6/blob/main/variable#TDZ)
  * [`var`变量提升](https://github.com/yihan12/build-up_ES6/blob/main/variable#变量提升)
  * [`let`不允许重复声明](https://github.com/yihan12/build-up_ES6/blob/main/variable#不允许重复声明)
  * [`const`命令](https://github.com/yihan12/build-up_ES6/blob/main/variable#const命令)
  * [`var`、`let`、`const`有什么区别](https://github.com/yihan12/build-up_ES6/blob/main/variable#区别)
  * [解构赋值](https://github.com/yihan12/build-up_ES6/blob/main/variable/Destructuring.md)
    * [对象解构](https://github.com/yihan12/build-up_ES6/blob/main/variable/Destructuring.md#对象解构)
    * [数组解构](https://github.com/yihan12/build-up_ES6/blob/main/variable/Destructuring.md#数组解构)
    * [字符串解构](https://github.com/yihan12/build-up_ES6/blob/main/variable/Destructuring.md#字符串解构)
  
* **[第二章 字符串](https://github.com/yihan12/build-up_ES6/blob/main/strings/README.md)**
  * [模板字符串](https://github.com/yihan12/build-up_ES6/blob/main/strings#模板字符串)
  * [标签模板](https://github.com/yihan12/build-up_ES6/blob/main/strings#标签模板)
  * [字符串新增方法](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md)
    * [unicode相关方法](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md#unicode相关方法)  
      * [`String.prototype.codePointAt`](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md#unicode相关方法) 
      * [`String.fromCodePoint`](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md#unicode相关方法)
      * [`String.prototype.normalize`](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md#unicode相关方法)
    * [原型方法](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md#原型方法)
      * [`String.prototype.startsWith`](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md#原型方法)
      * [`String.prototype.endsWith`](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md#原型方法)
      * [`String.prototype.includes`](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md#原型方法)
      * [`String.prototype.repeat`](https://github.com/yihan12/build-up_ES6/blob/main/strings/addition.md#原型方法)
    * [ES6+](https://github.com/yihan12/build-up_ES6/tree/main/strings/ES6+.md)
      * [ES2017 `padStart` & `padEnd`](https://github.com/yihan12/build-up_ES6/tree/main/strings/ES6+.md)
      * [ES2019 `trimStart` & `trimEnd`](https://github.com/yihan12/build-up_ES6/tree/main/strings/ES6+.md)
      * [ES2020 `matchAll`](https://github.com/yihan12/build-up_ES6/tree/main/strings/ES6+.md)
      * [ES2021 `replaceAll`](https://github.com/yihan12/build-up_ES6/tree/main/strings/ES6+.md)
       
  
* **[第三章 数值新特性](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number/README.md)**
  * [BigInt](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#BigInt)
  * [Math对象扩展](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
     * [`Math.trunc`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
     * [`Math.sign`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
     * [`Math.hypot`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
     * [`Math.hypot`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
     * [32位转换方法](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.clz32`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.imul`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.fround`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
     * [对数方法](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.expm1`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.log1p`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.log10`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.log2`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
     * [双曲函数方法](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.sinh`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.cosh`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.tanh`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.asinh`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.acosh`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
       * [`Math.atanh`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#Math对象扩展)
  * [二进制和八进制表示法](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#二进制和八进制表示法)
  * [数值分隔符 ES6+](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number#数值分隔符)
  * [数值新增方法](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number/addition.md)
    * [静态属性和`Number.isSafeInteger`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number/addition.md)
    * [`Number.isNaN`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number/addition.md)
    * [`Number.isFinite`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number/addition.md)
    * [`Number.parseInt`&`Number.parseFloat`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/number/addition.md)

* **[第四章 数组扩展](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array/README.md)**
  * [扩展运算符（spread）](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#扩展运算符（spread）)
  * [静态方法](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#静态方法)
    * [`Array.of`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#静态方法)
    * [`Array.from`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#静态方法)
  * [原型方法](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#原型方法)
    * [`Array.prototype.copyWithin`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#原型方法)
    * [`Array.prototype.fill`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#原型方法)
    * [`Array.prototype.find`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#原型方法)
    * [`Array.prototype.findIndex`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#原型方法)
  * [迭代器协议相关方法](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#迭代器协议相关方法)  
    * [`Array.prototype.keys`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#迭代器协议相关方法)  
    * [`Array.prototype.values`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#迭代器协议相关方法)  
    * [`Array.prototype.entries`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#迭代器协议相关方法)
    * [`Array.prototype[Symbol.iterator]`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array#迭代器协议相关方法)
  * [ES6+](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array/ES6%2B.md)
    * [`Array.prototype.includes`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array/ES6%2B.md#includes)
    * [`Array.prototype.flat`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array/ES6%2B.md#flat)
    * [`Array.prototype.flatMap`](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array/ES6%2B.md#flatMap)

* **[第五章 函数的扩展](https://github.com/yihan12/build-up_ES6-ES12/blob/main/array/README.md](https://github.com/yihan12/build-up_ES6-ES12/blob/main/function/README.md)**
  * [函数参数](https://github.com/yihan12/build-up_ES6-ES12/blob/main/function/README.md)
    * [参数默认值](https://github.com/yihan12/build-up_ES6-ES12/blob/main/function#函数默认值)
    * [与解构赋值结合](https://github.com/yihan12/build-up_ES6-ES12/blob/main/function#与解构赋值结合)
    * [length的属性](https://github.com/yihan12/build-up_ES6-ES12/blob/main/function#length的属性)
    * [作用域](https://github.com/yihan12/build-up_ES6-ES12/blob/main/function#作用域)
    * [函数的name属性](https://github.com/yihan12/build-up_ES6-ES12/blob/main/function#函数的name属性)
  * [箭头函数](https://github.com/yihan12/build-up_ES6-ES12/blob/main/function/arrow%20function.md)


* **[第六章 对象的扩展]()**

* **[第七章 Symbol]()**

* **[第八章 Set、Map、WeakMap和WeakSet](https://github.com/yihan12/build-up_ES6-ES12/blob/main/Set%26Map/README.md)**
  * [Set&Map](https://github.com/yihan12/build-up_ES6-ES12/blob/main/Set%26Map/README.md)
    * [Map&Object](https://github.com/yihan12/build-up_ES6-ES12/blob/main/Set%26Map/Map%26Object.md)
    * [Set&Array](https://github.com/yihan12/build-up_ES6-ES12/blob/main/Set%26Map/Set%26Array.md)
  * [WeakMap&WeakSet](https://github.com/yihan12/build-up_ES6-ES12/blob/main/Set%26Map/WeakMap%26WeakSet.md)
    * [垃圾回收](https://github.com/yihan12/build-up_ES6-ES12/blob/main/Set%26Map/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.md)
 


- [x] [第四章 数值新特性](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E5%9B%9B%E7%AB%A0/%E6%95%B0%E5%80%BC.md)  
- [x] [第五章 函数的默认参数、箭头函数、展开运算符、尾调用优化](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E4%BA%94%E7%AB%A0/%E5%87%BD%E6%95%B0.md)  
- [x] [第六章 数组扩展运算符（Rest+Spread）、类方法、原型方法](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E5%85%AD%E7%AB%A0/%E6%95%B0%E7%BB%84.md)  
- [x] [第七章 对象属性名简洁表示法和表达式、对象新方法、属性的遍历](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E4%B8%83%E7%AB%A0/%E5%AF%B9%E8%B1%A1.md)  
- [x] [第八章 Symbol](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E5%85%AB%E7%AB%A0/Symbol.md)  
- [x] [第九章 Set和Map数据结构](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E4%B9%9D%E7%AB%A0/Set%E5%92%8CMap%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md)    
- [x] [第十章 Proxy](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E5%8D%81%E7%AB%A0/Proxy.md)    
- [x] [第十一章 Reflect](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E5%8D%81%E4%B8%80%E7%AB%A0/Reflect.md)    
- [x] [第十二章 Promise](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0/Promise.md)    
- [x] [第十三章 async函数](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0/async%E5%87%BD%E6%95%B0.md)   
- [x] [第十四章 Class](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E5%8D%81%E5%9B%9B%E7%AB%A0/Class.md)  
- [x] [第十五章 Module的语法](https://github.com/yihan12/build-up_ES6/blob/main/%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0/Module%E7%9A%84%E8%AF%AD%E6%B3%95.md) 


参考资料：    

- [x] [ECMA草案完整版](https://tc39.es/ecma262/)  
- [x] [ES6 入门教程-阮一峰](https://es6.ruanyifeng.com/)  
- [x] [ES6 你可能不知道的事 - 基础篇](https://fed.taobao.org/blog/taofed/do71ct/es6-basics/?spm=taofed.bloginfo.header.7.61645ac80rx381)  
- [x] [ES6 你可能不知道的事 - 进阶篇](https://fed.taobao.org/blog/taofed/do71ct/es6-advanced/?spm=taofed.bloginfo.header.8.63f95ac8RY67Pn)  
- [x] [探索ES6](http://es6-org.github.io/exploring-es6/)  
- [x] [es6features](https://github.com/lukehoban/es6features#readme)  
- [x] [Learn ES2015](https://babeljs.io/docs/en/learn)  
- [x] [JavaScript for impatient programmers (ES2021 edition)](https://exploringjs.com/impatient-js/ch_destructuring.html)  
- [x] [Destructuring and parameter handling in ECMAScript 6](https://2ality.com/2015/01/es6-destructuring.html)  
- [x] [ECMAScript 6 Tools](https://github.com/addyosmani/es6-tools)  
- [x] [ECMAScript 6 Learning](https://github.com/ericdouglas/ES6-Learning)  
- [x] [JavaScript for impatient programmers](https://exploringjs.com/impatient-js/toc.html)  

多拿几个实例去浏览器测试，加深这些新特性理解；此文主要是对各个特性的学习笔记，以及多个特性的实例。这边只是对新特性的理解，要将这些运用到自己的代码中才能更好的理解这些知识。



