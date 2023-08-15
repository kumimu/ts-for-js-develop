export {};

class Person {
  name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
} // クラス定義にはセミコロンつかない

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    // privateであるthis.ageにはアクセスできないエラー
    // protectedであるnationarityはアクセス可能
    // return `name: ${this.name}, age: ${this.age}, nationarity: ${this.nationality}`; // エラー
    return `name: ${this.name}, nationarity: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 10, 'Japan');
// クラス内ではprivateであっても参照可能で、
// profile関数経由なら表示可能
console.log(taro.profile());
console.log(taro.name);
// privateにはアクセス不可
// console.log(taro.age);
