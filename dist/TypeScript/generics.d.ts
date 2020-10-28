declare function copy<T extends {
    name: string;
}, U extends keyof T>(value: T, key: U): T;
declare class LightDatabase<T extends string | number | boolean> {
    private data;
    add(item: T): void;
    remove(item: T): void;
    get(): T[];
}
declare const stringLightDatabase: LightDatabase<string>;
interface TmpDatabase<T> {
    id: number;
    data: T[];
}
declare const tmpDatabase: TmpDatabase<number>;
interface Todo {
    title: string;
    text: string;
}
declare type Todoable = Partial<Todo>;
declare type ReadTodo = Readonly<Todo>;
declare const fetchData: Promise<string>;
declare const vegetables: Array<string>;
interface ResponseData<T extends {
    message: string;
} = any> {
    data: T;
    status: number;
}
declare let tmp2: Response;
interface vegetables {
    tomato: string;
    pumpkin: string;
}
declare type MappedTypes = {
    [P in keyof vegetables]: P;
};
declare type ConditionTypes = 'tomato' extends string ? number : boolean;
declare type ConditionalTypeInfer = {
    tomato: 'tomato';
} extends {
    tomato: infer R;
} ? R : boolean;
