# 概览

> 解构只是意味着将复杂的结构分解成更简单的部分。在JavaScript中，这种复杂的结构通常是一个对象或一个数组。使用解构语法，您可以从数组和对象中提取更小的片段。解构语法可用于变量声明或变量赋值。您还可以使用嵌套解构语法来处理嵌套结构。


```javascript
// old
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}

displaySummary(student);

// Hello, John Doe
// Your Maths score is 74
// Your English score is 63
// Your Science score is 85
```
用ES6结构赋值，我们可以这么写
```javascript
// ES6
function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}
```

# 对象解构

对象解构构像是：用变量声明属性，变量值即为属性值，简单来说，就是提取对象中的属性。
```javascript
const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

// Object Destructuring
const { firstname, lastname, country } = student;

console.log(firstname, lastname, country); // Glad Chinda Nigeria
```
利用解构给变量重新赋值
```javascript
// Initialize local variables
let country = 'Canada';
let firstname = 'John';
let lastname = 'Doe';

const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

// Reassign firstname and lastname using destructuring
// Enclose in a pair of parentheses, since this is an assignment expression
({ firstname, lastname } = student);

// country remains unchanged (Canada)
console.log(firstname, lastname, country); // Glad Chinda Canada
```
上面代码，用解构赋值的方式重新给firstname, lastname变量赋值，所以后面打印的时候，firstname, lastname显示是student内部的firstname, lastname。country并未重新赋值，所以还是之前定义的名字。如果将中间的代码改为`({ firstname, lastname , country} = student);`。那么, country的值也会被重新赋值，为'Nigeria'

下面看下嵌套对象的结构：
```javascript
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// We define 3 local variables: name, maths, science
const { name, scores: {maths, science = 50} } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);

// John Doe scored 74 in Maths and 50 in Elementary Science.
```
使用嵌套对象解构时，要小心避免使用空的嵌套对象字面量。虽然它是有效的语法，但它实际上没有赋值。例如，上面的science，如果改成 `const { name, scores: {maths, science} } = student;`。那么`science`的值将是`undefined`

点运算配合解构赋值：
```javascript
const person = {
    name: 'John Doe',
    country: 'Canada',
    city:'shenzhen',
    org:'123',
    id:'1'
};

// Assign default value of 25 to age if undefined
const { id='', ...all } = person;
console.log(all) //{ name: 'John Doe',country: 'Canada',city:'shenzhen',org:'123',}
```
从案例中我们可以可以通过点运算+对象解构赋值，可以去除对象的属性，并将剩余属性赋值给`all`。  
* 从对象中取多个属性，有了新的处理。
* 从对象中无损删除属性，有了新的处理。

当然我们也可以删除多个属性：
```
const person = {
    name: 'John Doe',
    country: 'Canada',
    city:'shenzhen',
    org:'123',
    id:'1'
};

// Assign default value of 25 to age if undefined
const { id="",name="", ...all } = person;
console.log(all) //{country: 'Canada',city:'shenzhen',org:'123'}
```

# 数组解构  
> 在数组解构中，您在赋值表达式的左侧使用数组文字。数组文字上的每个变量名都映射到解构数组上同一索引处的相应项目。
```javascript
const rgb = [255, 200, 0];

// Array Destructuring
const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0
```

#### 逗号可以跳过元素
```javascript
let [,,x] = [1,2,3,4]
console.log(x) // 3
```
#### 数组点运算
```javascript
let [x,...y] = [1,2,3,4]
console.log(x,y) // 1 [2,3,4]

let [x, y, ...z] = ['a']; // x='a'; y=undefined; z=[]

let [x, ...[y, z]] = ['a', 'b', 'c'];
    // x = 'a'; y = 'b'; z = 'c'
```

#### 循环
```javascript
for (let [key, value] of map) {
  console.log(key + ' is ' + value);
}
```
#### 交换值
```javascript
[x,y] = [y,x]
```
#### 数组删除元素
```javascript
let [first, ...rest] = ['a', 'b', 'c'];
// first = 'a'; rest = ['b', 'c']
```
#### 克隆数组
```javascript
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Cloning with array destructuring and spread operator
const [...rainbowClone] = rainbow;

console.log(rainbow === rainbowClone); // false
console.log(rainbowClone); // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
```

# 字符串解构
字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
```javascript
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```
# 函数解构
