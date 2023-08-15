export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return `roar`;
  }
}

// 抽象クラスを継承する場合、関数の実態を宣言しない場合エラーとなる
// class Tiger extends Animal {
// }
