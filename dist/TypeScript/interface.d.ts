interface addFunc {
    (num1: number, num2: number): number;
}
declare let addFunc: addFunc;
interface Nameable {
    name: string;
    nickName?: string;
}
declare const nameable: Nameable;
interface Human extends Nameable {
    age: number;
    greeting(message: string): void;
}
declare class Developer implements Human {
    name: string;
    age: number;
    experience: number;
    constructor(name: string, age: number, experience: number);
    greeting(message?: string): void;
}
declare const user: Human;
