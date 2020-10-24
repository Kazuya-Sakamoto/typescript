import { Score } from './score.js';
export class Food {
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
