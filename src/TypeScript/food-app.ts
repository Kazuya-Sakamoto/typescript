interface Scoreable {
  readonly totalScore: number;
  render(): void;
}
interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}
interface Foodsable {
  readonly elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}

class Score implements Scoreable {
  private static instance: Score;
  get totalScore() {
    const foods = Foods.getInstance();
    return foods.activeElementScore.reduce((total, score) => total + score, 0)
  }
  render() {
    document.querySelector('.score__number')!.textContent = String(this.totalScore);
  }
  private constructor() {}
  // * Score を 計算する
  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }
}

class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  // * clickされたら 発火する 
  clickEventHandler() {
    //? this.element.classList.toggle('クラス') クラスが含まれていれば削除、含まれていなければ追加する
    console.log('--------Click を検知しました (1) --------')
    this.element.classList.toggle('food--active'); 
    const score = Score.getInstance();
    score.render();
  }
}

class Foods implements Foodsable{
  private static instance: Foods;
  elements = document.querySelectorAll<HTMLDivElement>('.food'); //? element .food を全て取得する
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];

  // * Element 要素を取得する
  get activeElement() {
    console.log('--------3--------')
    this._activeElements = [];
    this.elements.forEach(element => {
      //?  element.classList.contains('クラス名') 対象の要素にクラス名が含まれていれば「true」、含まれていなければ「false」が返ります。
      if (element.classList.contains('food--active')) { //? Element.classList クラスリストの操作   https://developer.mozilla.org/ja/docs/Web/API/Element/classList
        this._activeElements.push(element); //? click した class を [] に格納する
      }
    })
    return this._activeElements;
  }
  // * 配列に Scoreの数を格納する 計算前
  get activeElementScore() {
    console.log('--------2--------')
    this._activeElements = [];
    this.activeElement.forEach(element => {
      const foodScore = element.querySelector('.food__score');
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    })
    return this._activeElementsScore;
  }
  private constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods();
      console.log('--------0--------')
    }
    console.log('--------0--------')
    return Foods.instance;
  }
}

const foods = Foods.getInstance();