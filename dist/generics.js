"use strict";
// * generics <T> 型を新しく作成する
// * extends で 型を指定する
function copy(value, key) {
    return value;
}
console.log(copy({ name: 'Taro', age: 35 }, 'age'));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase);
