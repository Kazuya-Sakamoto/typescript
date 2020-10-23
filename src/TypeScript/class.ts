abstract class Person {
  // name: string; //? 何も記載しなければ public になる
  // private age: number; //? private classの中だけ使用できるようにする
  readonly id: number  = 1;
  static species = 'Hom sapience';
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  // * constructor 初期化 オブジェクト
  constructor(public readonly name: string, protected age: number) { //? readonly 読むだけ 書き換えない
    // this.age = initAge;
    this.id = 11;
    this.name = "Taro";
    this.id = 12;
  }
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${ this.name }. I am ${ this.age } years old.`)
    this.explainJob();
  }
  abstract explainJob(): void;
}
// * class を作ることで class のインスタンスだけでなく型も作ることができる
// let person2 = Person;
// const myName = new Person('Kazuya', 24);
// console.log(myName);
// myName.greeting();

// * class の継承
class Teacher extends Person {
  explainJob() {
    console.log(`I am a teacher and I teach ${ this.subject }`)
  }
  // * getter 型は setter と同じになる
  get subject() {
    if(!this._subject) {
      throw new Error('There is no subject');
    }
    return this._subject
  }
  // * setter 
  set subject(value) {
    if(!value) {
      throw new Error('There is no subject');
    }
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  greeting() {
    console.log(`Hello! My name is ${ this.name }. I am ${ this.age } years old. I teach ${ this.subject }`);
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

