export {};

// 型が異なっていても、定義できない。
// const echo = (arg: number): number => {
//   return arg;
// };
//
// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

// まずは、通常の型でクラスを書く
// class Mirror{
//   constructor(public value: number) {}

//   echo(): number {
//     return this.value;
//   }
// }

// 汎用型で書き換える
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics!').echo());
console.log(new Mirror<boolean>(true).echo());
