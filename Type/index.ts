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

// * Enum型 列挙型 特定のまとまったグループを宣言する パスカルケースで記載
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

// * Any型 なんでも入るよ !なるべく使用しない
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
let banana = 'banana'; //? stringにも入っちゃう...
banana = anything; 

// * Union型 複数の型を取り扱うことができる
let unionType: number | string = 10;
// unionType.toUpperCase(); //? Error
unionType = "文字";
unionType.toLocaleUpperCase();
let unionTypeArray: (number | string)[] = [21, 'hello']; 

// * Literal 型 特定の決まった値のみを使用する
let apple: 'apple' = 'apple';
const appleConst = 'apple'; //? const だと自動的に Literal型 になる
let clothSize: 'small' | 'medium' | 'large' = 'small'; //? Enumとの違いは こっちはただの文字列です

const cloth = {
  color: 'white',
  size: clothSize //? smallしか受け付けられない
}

// * typeエイリアス 型を複数変数のように宣言ができる
type ClothSize = 'small' | 'medium' | 'large';


// *  関数に型をつける
// ? parameter は 型をつける必要がある
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(3, 2);

// * void型 何も返さない
function sayHello(): void {
  console.log('Hello');
  // return; undefinedが必要ない
}
console.log(sayHello()); //? undefined で返る
let tmp: undefined; //? 基本的には使用しない

// * undefined と null 違い null も undefinedも入る
let tmpNull: null = null; 

// * 関数の型注釈
const anotherAdd: (n1: number, n2: number) => number = add; //? =>が違い
const doubleNumber: (num: number) => number = num => num * 2;

// * callback 関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNumber = cb(num * 2);
  console.log(doubleNumber);
}
doubleAndHandle(21, doubleNumber => {
  return doubleNumber;
})

