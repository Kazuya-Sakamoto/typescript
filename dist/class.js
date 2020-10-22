"use strict";
class Person {
    // * constructor 初期化 オブジェクト
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // name: string; //? 何も記載しなければ public になる
        // private age: number; //? private classの中だけ使用できるようにする
        this.id = 1;
        // this.age = initAge;
        this.id = 11;
        this.name = "Taro";
        this.id = 12;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = 'Hom sapience';
// * class を作ることで class のインスタンスだけでなく型も作ることができる
// let person2 = Person;
// const myName = new Person('Kazuya', 24);
// console.log(myName);
// myName.greeting();
// * class の継承
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    // * getter 型は setter と同じになる
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject');
        }
        return this._subject;
    }
    // * setter 
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject');
        }
        this._subject = value;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}
const teacher = new Teacher('Tanaka', 38, 'Music');
teacher.explainJob();
// console.log(Person.species);
// console.log(Person.isAdult(37));
// console.log(Teacher.species);
// console.log(Teacher.isAdult(27));
// const teacher = new Teacher('Kazuya', 24, 'Math');
// teacher.subject = 'Music!!!!'
// console.log(teacher.subject); //? プロパティのように扱うことができる
// teacher.greeting();
// const anotherMyName = {
//   name: 'anotherName',
//   greeting(){},
//   anotherGreeting: myName.greeting
// }
// anotherMyName.anotherGreeting();
