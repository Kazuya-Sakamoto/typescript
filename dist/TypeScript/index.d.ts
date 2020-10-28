declare let hasValue: boolean;
declare let hasKey: boolean;
declare let count: number;
declare let float: number;
declare let negative: number;
declare let single: string;
declare let double: string;
declare let back: string;
declare const person: {
    name: string;
    age: number;
};
declare const fruits: StringNumber[];
declare const fruit: StringNumber;
declare const book: [string, number, boolean];
declare enum CoffeeSize {
    SHORT = 0,
    TALL = 1,
    GRANDE = 2,
    VENTI = 3
}
declare const coffee: {
    hot: boolean;
    size: CoffeeSize;
};
declare let anything: any;
declare let banana: string;
declare let unionType: number | string;
declare let unionTypeArray: (number | string)[];
declare let apple: 'apple';
declare const appleConst = "apple";
declare let clothSize: 'small' | 'medium' | 'large';
declare const cloth: {
    color: string;
    size: "small";
};
declare type ClothSize = 'small' | 'medium' | 'large';
declare function add(num1: number, num2: number): number;
declare function sayHello(): void;
declare let tmp: undefined;
declare let tmpNull: null;
declare const anotherAdd: (n1: number, n2: number) => number;
declare const doubleNumber: (num: number) => number;
declare function doubleAndHandle(num: number, cb: (num: number) => number): void;
declare function doubleCount(num: number, count: (num: number) => number): void;
declare let unknownInput: unknown;
declare let anyInput: any;
declare let text: string;
