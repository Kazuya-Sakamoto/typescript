// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number; //? 無名関数みたいだね
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Nameable {
  name: string;
  nickName?: string; //? あってもなくても良い
}
const nameable: Nameable = {
  name: 'Kazuya',
  nickName: 'Kazu'
}

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string = 'hello') {
    console.log(message);
  }
}

const user: Human = new Developer('Kazuya', 27, 3);

