export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できない
//   * 参照できる
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で変更できる
//   * 参照できない

class MyNumberCard {
  // private owner: string;
  private _owner: string;
  // private secretNumber: number;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // getterの関数
  // メンバー変数と被っているエラーとなる
  // 要素の方に_をつけて対応
  get owner() {
    return this._owner;
  }

  // メンバー変数と被っているエラーとなる
  // 要素の方に_をつけて対応
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

// ownerは途中で変更できない
// card.owner = 'bar'; // エラー。ownerはgetterを介してのみアクセス可
// card._owner = 'bar'; // エラー。要素名を知っていても、プライベートなのでアクセス不可

let card = new MyNumberCard('foo', 12345);

console.log(card.debugPrint()); // 変更前を出力
// secretNumber: 12345
card.secretNumber = 99999; // 変更可能
console.log(card.debugPrint()); // 変更後を出力
// secretNumber: 99999
console.log(card.owner); // アクセス可
// foo
console.log(card.secretNumber);
// undefined
console.log(card); // ※ secretNumberも見えてしまう
// MyNumberCard { _owner: 'foo', _secretNumber: 99999 }
