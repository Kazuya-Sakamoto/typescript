// * import 4つの書き方
import { Foods } from './foods.js';
// import { Foods as FoodsList } from './foods.js'; //? asを使用して命名を変える
// import * as Foods from './foods.js'; //? 全部 取得する
// import fafafa from './foods.js'; //? export default と同時に使う 命名はなんでもよくなる
Foods.getInstance();
