const j = 0;


const obj = { prop: 0 };
obj.prop = obj.prop + 1;
console.log(obj.prop); // 1

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
