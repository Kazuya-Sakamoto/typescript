// *  もし @types で install できなかった場合 型ファイルを自力で書く
declare module 'lodash' {
  export function shuffle<T>(arr: T[]): T[] {}
}
// * import しなくても使用できるようにする
declare const _: {
  shuffle<T>(arr: T[]): T[];
}