// * 型注釈 型推論
let hasValue: boolean = true;
let hasKey = false;

let count: number = 10;
let float: number = 3.14;
let negative: number = -0.54;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// * オブジェクト
const person: {
  name: string,
  age: number
} = {
  name: 'Kazuya',
  age: 24
}
console.log(person.age);

// * 配列
const fruits = ['Apple', 'Banana', 'Grape', 1];
const fruit = fruits[0];
console.log(fruits);

// * Tuple型 型の順序が決めたい場合
const book: [string, number, boolean ] = ['business', 1500, false];
book.push(21) // ? Errorが出ない
// console.log(book[3]); //? Error を出すよ 

// * Enum 列挙型 特定のまとまったグループを宣言する パスカルケースで記載
// enum CoffeeSize {
//   SHORT = 'SHORT',
//   TALL = 'TALL',
//   GRANDE = 'GRANDE',
//   VENTI = 'VENTI'
// }
// ? 数字が入る
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI 
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

