# 概览

# 模板字符串 
> 模板字符串是允许嵌入表达式的字符串。您可以使用多行字符串、字符串插值和表达式插值功能。在ES2015规范的早期版本中，它们被称为“模板字符串”。

```javascript
`\`` === "`"; // true
`\${1}` === "${1}"; // true
```

在下面这个例子中，字符串连接有两个令我印象深刻的恼人特性。用反斜杠转义撇号，并试图用双引号和单引号弄清楚字符串末尾发生了什么。模板文字减轻了这两个问题，我们留下了更清晰的代码行。

```javascript
const p = {
  name: 'Jackson',
  nn: 'Jak',
};
// STRING CONCATENATION
console.log('Hi, I\'m ' + p.name + '! Call me "' + p.nn + '".');
// TEMPLATE LITERALS
console.log(`Hi, I'm ${p.name}! Call me "${p.nn}".`);
// "Hi, I'm Jackson! Call me 'Jak'."

```
ES5 
```javascript
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```
ES6
```javascript
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```
如您所见，在使用模板文字时，我们的代码更易于阅读。您可以轻松查看我们的字符串在说什么以及变量插入的位置。

对于换行符来说，我们可以看下面这个例子：  
```javascript
// STRING CONCATENATION
console.log("Dear Mom,\n" + 
"Hope you are well.\n" + 
"\tLove, your son")
// TEMPLATE LITERALS
console.log(`Dear Mom,
Hope you are well.
    Love, your son`);
// Dear Mom,
// Hope you are well.
//     Love, your son
```

使用模板字符串，插入任何新行字符、制表符、空格等都将成为字符串的一部分。这既是福也是祸，但就易读性而言绝对是一个优势。

不过，在JavaScript术语中，模板字符串是一种连接字符串的方法，同时允许嵌入表达式并提高易读性。
```javascript
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```

#### 模板字符串的特点：
* 用反引号（`）标识。
* 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
* 模板字符串中嵌入变量，需要将变量名写在${}之中。一些运算也能嵌入其中。
* 模板字符串甚至还能嵌套。

# 标签模板
> 模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。

```javascript
function tagFunc(...args) {
  return args;
}

const setting = 'dark mode';
const value = true;
console.log(tagFunc`Setting ${setting} is ${value}!`, //[['Setting ', ' is ', '!'], 'dark mode', true]
[['Setting ', ' is ', '!'], 'dark mode', true] )//[['Setting ', ' is ', '!'], 'dark mode', true]
```
第一个反引号之前的函数tagFunc称为标签函数。它的参数是：

* 模板字符串（第一个参数）：一个数组，文本片段围绕插值${}。
在示例中：['Setting '，' is ', '!']
* 替换（剩余参数）：插值。
在示例中：`dark mode`和`true`

字符串的静态（固定）部分（模板字符串）与动态部分（替换）保持分离。

#### hello world
```javascript
function tag(...e){
  console.log(e); // [['hello world']]
}
tag`hello world`
```
从hello world中不难看出，标签模板中的字符串参数会被放在数组内。我们现在看下加入插值后会发生什么变化。

#### 加入插值`${}`
```javascript
function tag(...e){
  console.log(e); // [['hello world ', ""], '123']
}
const a = '123'
tag`hello world ${a}`
```
其实tag相当于传入`tag(['hello world ', ""], '123')`
```javascript
function tag(...e){
  console.log(e); // [['hello world ', ""], '123']
}
const a = '123'
tag`hello world ${a}`

tag(['hello world ', ""], '123') // [['hello world ', ""], '123']
```

#### 拼合
```javascript
let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

console.log(msg) // "The total is 30 (31.5 with tax)"
```



