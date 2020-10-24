function Logging(target: Function) {
  console.log('Logging...')
  // console.log(constructor);
}

// * インスタンス生成時 ではなく class定義時に読まれる
@Logging
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created!')
  }
}
