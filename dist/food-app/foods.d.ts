import { Foodsable } from './interface';
export declare class Foods implements Foodsable {
    private static instance;
    elements: NodeListOf<HTMLDivElement>;
    private _activeElements;
    private _activeElementsScore;
    get activeElements(): HTMLDivElement[];
    get activeElementsScore(): number[];
    private constructor();
    static getInstance(): Foods;
}
