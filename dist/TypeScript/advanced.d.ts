interface Engineer {
    name: string;
    role: string;
}
interface Blogger {
    name: string;
    follower: number;
}
interface EngineerBlogger extends Engineer, Blogger {
}
declare const quill: EngineerBlogger;
declare type NumberBoolean = number | boolean;
declare type StringNumber = string | number;
declare type Mix = NumberBoolean & StringNumber;
declare function toUpperCase(x: string): string;
declare function toUpperCase(x: number): number;
interface TemFunc {
    (x: string): string;
    (x: number): number;
}
declare const upperHello: string;
declare type NomadWorker = Engineer | Blogger;
declare function describeProfile(nomadWorker: NomadWorker): void;
declare class Dog {
    kind: 'dog';
    speak(): void;
}
declare class Bird {
    kind: 'bird';
    speak(): void;
    fly(): void;
}
declare type Pet = Dog | Bird;
declare function havePet(pet: Pet): void;
interface Designer {
    name: string;
    [index: string]: string;
}
declare const designer: Designer;
interface DownloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        };
    };
}
declare const downloadedData: DownloadedData;
declare const userData: string | {
    name?: {
        first: string;
        last: string;
    } | undefined;
};
declare type id = DownloadedData["user"];
declare function advancedFn(...args: readonly [number, string, boolean, ...number[]]): void;
declare const peter: {
    readonly name: "Peter";
    readonly age: 38;
};
declare type PeterType = typeof peter;
