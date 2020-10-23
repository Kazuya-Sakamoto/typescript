// * generics <T> 型を新しく作成する
// * extends で 型を指定する
function copy<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy({ name: 'Taro' }));

