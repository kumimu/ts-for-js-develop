export {};

class Person {
  // メンバーを削除
  // name: string;
  // protected age: number;

  // 初期化処理を削除
  // constructor(name: string, age: number) {
  //   // this.name = name;
  //   // this.age = age;
  // }

  // 引数にアクセス修飾子を書けば、上記と同じ働きをする。地味だけどすごい。
  constructor(public name: string, protected age: number) {}
}

const me = new Person('kumi', 10);
console.log(me);
