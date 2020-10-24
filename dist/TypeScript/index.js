"use strict";
// * 型注釈 型推論
let hasValue = true;
let hasKey = false;
let count = 10;
let float = 3.14;
let negative = -0.54;
let single = 'hello';
let double = "hello";
let back = `hello`;
// * オブジェクト
const person = {
    name: 'Kazuya',
    age: 24
};
console.log(person.age);
// * 配列
const fruits = ['Apple', 'Banana', 'Grape', 1];
const fruit = fruits[0];
console.log(fruits);
// * Tuple型 型の順序が決めたい場合
const book = ['business', 1500, false];
book.push(21); // ? Errorが出ない
// console.log(book[3]); //? Error を出すよ 
// * Enum型 列挙型 特定のまとまったグループを宣言する パスカルケースで記載
// enum CoffeeSize {
//   SHORT = 'SHORT',
//   TALL = 'TALL',
//   GRANDE = 'GRANDE',
//   VENTI = 'VENTI'
// }
// ? 数字が入る
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
// * Any型 なんでも入るよ !なるべく使用しない
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.value = 'value';
let banana = 'banana'; //? stringにも入っちゃう...
banana = anything;
// * Union型 複数の型を取り扱うことができる
let unionType = 10;
// unionType.toUpperCase(); //? Error
unionType = "文字";
unionType.toLocaleUpperCase();
let unionTypeArray = [21, 'hello'];
// * Literal 型 特定の決まった値のみを使用する
let apple = 'apple';
const appleConst = 'apple'; //? const だと自動的に Literal型 になる
let clothSize = 'small'; //? Enumとの違いは こっちはただの文字列です
const cloth = {
    color: 'white',
    size: clothSize //? smallしか受け付けられない
};
// *  関数に型をつける
// ? parameter は 型をつける必要がある
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
// * void型 何も返さない
function sayHello() {
    console.log('Hello');
    // return; undefinedが必要ない
}
console.log(sayHello()); //? undefined で返る
let tmp; //? 基本的には使用しない
// * undefined と null 違い null も undefinedも入る
let tmpNull = null;
// * 関数の型注釈
const anotherAdd = add; //? =>が違い
const doubleNumber = num => num * 2;
// * callback 関数
function doubleAndHandle(num, cb) {
    const doubleNumber = cb(num * 2);
    console.log(doubleNumber);
}
doubleAndHandle(21, doubleNumber => {
    return doubleNumber;
});
// * unknown型
let unknownInput;
let anyInput;
let text;
unknownInput = 'aaaa';
unknownInput = 11;
unknownInput = true;
// text = unknownInput; //? error
text = anyInput; //? error出ない
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
