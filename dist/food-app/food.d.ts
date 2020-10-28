import { Foodable } from './interface';
export declare class Food implements Foodable {
    element: HTMLDivElement;
    constructor(element: HTMLDivElement);
    clickEventHandler(): void;
}
