export {};
let fooCompatible: any;
let barCompatible: string = 'TypeString';

console.log(typeof fooCompatible);

// 代入可能 互換性あり
fooCompatible = barCompatible;

// 代入後は型がかわっている
console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// 代入不可 互換性なし
// fooInCompatible = barInCompatible; // エラー

let fooString: string;
let barString: string = 'string';

fooString = barString;

// 文字列リテラル型(fooStringLiteral は 'fooStringLiteral' しか持てない)
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
// 文字列リテラル型は文字列型の一部なので、文字列に代入することは可能
fooString = fooStringLiteral;

let fooNumber: number;
// 数値リテラル型(fooNumberLiteral は 100 しか持てない)
let fooNumberLiteral: 100 = 100;
// 数値リテラル型は数値型の一部なので、数値型に代入することは可能
fooNumber = fooNumberLiteral;

// インタフェース
interface Animal {
  age: number;
  name: string;
}

// クラス
class Person {
  constructor(public age: number, public name: string, public sex: string) {}
}

let me: Animal;

// 代入OK
// オブジェクト間の互換性は内部の型に着目しているだけ、クラスの違いや継承濃霧は気にしない
// 代入される側の要素が代入する側の要素にあればOK
// 構造的部分型という
// Personの要素がおおくても問題ないが、Animalに必要な要素がPersonにない場合エラーとなるどちらかのメンバーデータがないばいエラーとなる
me = new Person(100, 'aa', 'male'); // Animal < PersonはOK
console.log(me);
console.log(typeof me);
// Personを代入しているが、typeofの結果は object となる。
