declare abstract class Person {
    readonly name: string;
    protected age: number;
    readonly id: number;
    static species: string;
    static isAdult(age: number): boolean;
    constructor(name: string, age: number);
    incrementAge(): void;
    greeting(this: Person): void;
    abstract explainJob(): void;
}
declare class Teacher extends Person {
    private _subject;
    explainJob(): void;
    get subject(): string;
    set subject(value: string);
    constructor(name: string, age: number, _subject: string);
    greeting(): void;
}
declare const teacher: Teacher;
