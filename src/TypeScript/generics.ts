// * generics <T> 型を新しく作成する
// * extends で 型を指定する
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  return value;
}
console.log(copy({ name: 'Taro', age: 35 }, 'age'));


class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase);