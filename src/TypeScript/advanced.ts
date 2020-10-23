interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}
// * & を使用
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;


// * 関数のオーバーロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  } 
  return ''
}

interface TemFunc {
  (x: string): string;
  (x: number): number;
}
// const upperHello: TemFunc = function (x: string | number) { return 0 };
const upperHello = toUpperCase('hello');


type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name)
  if ('role' in nomadWorker) { //? in演算子
    console.log(nomadWorker.role)
  } 
  if ('follower' in nomadWorker) { //? in演算子
    console.log(nomadWorker.follower)
  } 
}

class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('bow-bow');
  }
}

class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet')
  }
  fly() {
    console.log('flutter')
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case 'bird':
      pet.fly();
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

// * 型アサーション
// const input = document.getElementById('input') as HTMLInputElement;
// const input2 = document.getElementById('input')!; //? nullを弾く
// input.value = 'initial input value';


interface Designer {
  name: string;
  [index: string]: string; //? 全部この型にする
}

const designer: Designer = {
  name: 'Kazuya'
}

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}

const downloadedData: DownloadedData = {
  id: 1
}
console.log(downloadedData.user?.name?.first);
const userData = downloadedData.user ?? 'no-user';
type id = DownloadedData["user"];


function advancedFn(...args: readonly [number, string, boolean, ...number[]]) {
  console.log(args[0])
}
advancedFn(0,"aaa", false, 5, 5, 3, 10)

