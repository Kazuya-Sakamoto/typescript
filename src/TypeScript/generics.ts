// * generics <T> 型の引数
// * extends で 型を指定する
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  return value;
}
console.log(copy({ name: 'Taro', age: 35 }, 'age'));

// * class ジェネリック
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

// * interface ジェネリック
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32]
}

interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('hello');
  }, 3000)
})
fetchData.then(data => {
  data.toUpperCase();
})
const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

// ? デフォルトの型指定
interface ResponseData<T extends {message: string} = any> {
  data: T;
  status: number;
}

let tmp2: Response;

// * 型のfor 文 Mapped Types
interface vegetables {
  tomato: string;
  pumpkin: string;
}
type MappedTypes = {
  [P in keyof vegetables]: P
}

// * 型の条件分岐 Conditional Types
type ConditionTypes = 'tomato' extends string ? number : boolean;
type ConditionalTypeInfer = { tomato: 'tomato' } extends { tomato: infer R } ? R : boolean;

