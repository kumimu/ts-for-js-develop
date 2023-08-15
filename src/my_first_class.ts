export {};

class Person {
  name: string;
  age: number;
  // コンストラクタには戻り値を書くとコンパイルエラー
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile() {
    return `name: ${this.name}, age: ${this.age}`;
  }
} // クラス定義にはセミコロンつかない

let taro = new Person('Taro', 10);
console.log(taro.profile());
// let hanako = new Person();
