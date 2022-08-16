export {};

// シグネチャがあることで、不正なデータの受け取りができなくなる。
function double(value: number): number;
function double(value: string): string;

// 実態
// anyだからといって型制約がないわけではない。それはシグネチャで宣言しているから。
// 1つの関数内に2つのプリミティブ型の分岐を書くので、あんまり良さがわからないけど、
// 終始、型安全に
// function double(value: any): any {
//   if (typeof value === 'number') {
//     return value * 2;
//   } else if (typeof value === 'string') {
//     return value + value;
//   } else {
//     // それ以外のケースは実行間にコンパイルエラーになるため、(trueを引数に渡した実行箇所はエラー)
//     // ここが有効になることはない。
//     // つまり、上記のif文はシンプルに書ける。
//     throw 'numberでもstringでもないので、引数の型を確認してください。';
//   }
// }

// 上記を踏まえてシンプルに書き直す
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Yay '));
// 実行間にコンパイルエラーになる。
// console.log(double(true)); // エラー
