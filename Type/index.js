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
// * Enum 列挙型 特定のまとまったグループを宣言する
var coffeeSize;
(function (coffeeSize) {
    coffeeSize["SHORT"] = "SHORT";
    coffeeSize["TALL"] = "TALL";
    coffeeSize["GRANDE"] = "GRANDE";
    coffeeSize["VENTI"] = "VENTI";
})(coffeeSize || (coffeeSize = {}));
var coffee = {
    hot: true,
    size: coffeeSize.TALL
};
coffee.size = coffeeSize.SHORT;
