// const 不变
const j = 0;

// const 内部变量属性可变
const obj = { prop: 0 };
obj.prop = obj.prop + 1;
console.log(obj.prop); // 1

// const 循环
const arr = ['hello', 'world'];
for (const elem of arr) {
  console.log(elem);
}
// Output:
// 'hello'
// 'world'

const arr = ['hello', 'world'];
for (let i=0; i<arr.length; i++) {
  const elem = arr[i];
  console.log(elem);
}
// Output:
// 'hello'
// 'world'
