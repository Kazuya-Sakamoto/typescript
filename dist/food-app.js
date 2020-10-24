"use strict";
class Score {
    constructor() { }
    get totalScore() {
        const foods = Foods.getInstance();
        return foods.activeElementScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
    // * Score を 計算する
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    // * clickされたら 発火する 
    clickEventHandler() {
        //? this.element.classList.toggle('クラス') クラスが含まれていれば削除、含まれていなければ追加する
        console.log('--------Click を検知しました (1) --------');
        this.element.classList.toggle('food--active');
        const score = Score.getInstance();
        score.render();
    }
}
class Foods {
    constructor() {
        this.elements = document.querySelectorAll('.food'); //? element .food を全て取得する
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(element => {
            new Food(element);
        });
    }
    // * Element 要素を取得する
    get activeElement() {
        console.log('--------3--------');
        this._activeElements = [];
        this.elements.forEach(element => {
            //?  element.classList.contains('クラス名') 対象の要素にクラス名が含まれていれば「true」、含まれていなければ「false」が返ります。
            if (element.classList.contains('food--active')) { //? Element.classList クラスリストの操作   https://developer.mozilla.org/ja/docs/Web/API/Element/classList
                this._activeElements.push(element); //? click した class を [] に格納する
            }
        });
        return this._activeElements;
    }
    // * 配列に Scoreの数を格納する 計算前
    get activeElementScore() {
        console.log('--------2--------');
        this._activeElements = [];
        this.activeElement.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
            console.log('--------0--------');
        }
        console.log('--------0--------');
        return Foods.instance;
    }
}
const foods = Foods.getInstance();
