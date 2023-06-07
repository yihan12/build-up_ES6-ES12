// var 全局变量
const declarativeVariable = 'd';
var objectVariable = 'o';

console.log(window.declarativeVariable) // undefined
console.log(window.objectVariable) // 'o'

var number1 = 15 
console.log(window.number1,globalThis.number1,window===globalThis); // 15 15 true
