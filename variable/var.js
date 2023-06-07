// var 全局变量
const declarativeVariable = 'd';
var objectVariable = 'o';

console.log(window.declarativeVariable) // undefined
console.log(window.objectVariable) // 'o'

var number1 = 15 
console.log(window.number1,globalThis.number1,window===globalThis); // 15 15 true

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
