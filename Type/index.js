// * 型注釈 型推論
var hasValue = true;
var hasKey = false;
var count = 10;
var float = 3.14;
var negative = -0.54;
var single = 'hello';
var double = "hello";
var back = "hello";
// * オブジェクト
var person = {
    name: 'Kazuya',
    age: 24
};
console.log(person.age);
// * 配列
var fruits = ['Apple', 'Banana', 'Grape', 1];
var fruit = fruits[0];
console.log(fruits);
// * Tuple型 型の順序が決めたい場合
var book = ['business', 1500, false];
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
var coffee = {
    hot: true,
    size: coffeeSize.TALL
};
