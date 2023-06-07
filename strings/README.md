# 概览

# 模板字符串 
> 模板字符串是允许嵌入表达式的字符串。您可以使用多行字符串、字符串插值和表达式插值功能。在ES2015规范的早期版本中，它们被称为“模板字符串”。

```javascript
`\`` === "`"; // true
`\${1}` === "${1}"; // true

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
