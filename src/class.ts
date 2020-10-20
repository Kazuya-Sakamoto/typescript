class Person {
  name: string;
  // * 初期化 オブジェクト
  constructor(initName: string) {
    this.name = initName;
  }

  greeting() {
    console.log(`Hello! My name is ${ this.name }`)
  }
}
const myName = new Person('Kazuya');
console.log(myName);
myName.greeting();

const anotherMyName = {
  name: 'anotherName',
  anotherGreeting: myName.greeting
}

anotherMyName.anotherGreeting();