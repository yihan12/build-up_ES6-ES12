# 预览

> ES6中实现的一个语法糖，用于简化基于原型集成实现类定义的场景。  
> 提供更便利的方法去创建老式的构造器函数。  

类和子类  
```javascript
class Point {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`
  }
}

class ColorPoint extends Point{
  constructor(x, y, color){
    super(x, y);
    this.color = color;
  }
  toString(){
    return super.toString() + ' in ' + this.color
  }
}

// 使用： 
const cp = new ColorPoint(25, 8, 'green');

console.log(cp.toString()); // '(25, 8) in green'
console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true
console.log(typeof Point); // 'function'
```

### 要点  

* **一、只能通过`new`调用类，不能通过函数调用。**  
```javascript
class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  toString(){
    return `(${this.x}, ${this.y})`
  }
}
const p = new Point(25, 8);
console.log(p.toString()); // '(25, 8)'

console.log(typeof Point); // 'function'

Point(); // Uncaught TypeError: Class constructor Point cannot be invoked without 'new'
```

* **二、类声明不能被提升。**  
```javascript
new Foo(); // Uncaught ReferenceError: Cannot access 'Foo' before initialization
class Foo{}
```

* **三、类的表达式定义。**  
```javascript
const MyClass  = class Me{
  getClassName(){
    return Me.name
  }
}
const init = new MyClass();
console.log(init.getClassName()); // Me
console.log(MyClass.name); // Me
console.log(Me.name); // Uncaught ReferenceError: Me is not defined
```

* **四、类的构造器、静态方法、原型方法**  
```javascript
class Foo{
  constructor(prop){
    this.prop = prop;
  }
  static staticMethod(){
    return 'classy';
  }
  prototypeMethod(){
    return 'prototypical'
  }
}
const foo = new Foo(123);
console.log(Foo === Foo.prototype.constructor); // true
console.log(typeof Foo); // 'function'

// 静态方法
console.log(typeof Foo.staticMethod); // 'function'
console.log(Foo.staticMethod()); // 'classy'
console.log(Foo.prototype.prototypeMethod()); // 'prototypical'
console.log(Foo.prototypeMethod()); // Uncaught TypeError: Foo.prototypeMethod is not a function

// 原型方法
console.log(typeof Foo.prototype.prototypeMethod); // 'function'
console.log(foo.prototypeMethod()); // 'prototypical'
console.log(foo.staticMethod()); // Uncaught TypeError: foo.staticMethod is not a function
```
父类的静态方法可以被子类继承  
```javascript
class Foo{
  static classMethod(){
    return 'hello'
  }
}
class Bar extends Foo{}
console.log(Bar.classMethod()); // 'hello'
```
静态方法也可以从`super`对象上调用  
```javascript
class Foo{
  static classMethod(){
    return 'hello'
  }
}
class Bar extends Foo{
  static classMethod(){
    return super.classMethod() + ', too';
  }
}
console.log(Bar.classMethod()); // 'hello, too'
```

* **五、类的静态属性和实例属性。**   
静态属性  
```javascript
// 旧方法
class Foo{

}
Foo.prop = 1;

// 新方法
class MyClass {
  static myStaticProp = 1;
  constructor(){
    console.log(MyClass.myStaticProp); // 1
  }
}
console.log(MyClass.props); // 1
```
实例属性  
```javascript
class MyClass{
  myProp = 42;
  static props = 1;
  constructor(){
    console.log(MyClass.props); // 1
    console.log(this.myProp); // 42
  }
}
console.log(MyClass.myProp); // undefined
console.log(MyClass.props); // 1  
const p = new MyClass();
console.log(p.myProp); // 42
console.log(p.props); // undefined
```
实例属性的使用
```javascript
// 以前定义实例属性时，只能写在类的`constructor`方法里
class ReactCounter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }
}

// 新写法
class ReactCounter extends React.Component{
  state = {
    count: 0
  }
}
// 增强可读性
class ReactCounter extends React.Component{
  state;
  constructor(props){
    super(props);
    this.state = {
      count: 0 
    }
  }
}
```

* **六、类的取值函数（getter）和存值函数（setter）  
```javascript
```
