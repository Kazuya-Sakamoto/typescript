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


function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  } 
  return ''
}

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
const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';

