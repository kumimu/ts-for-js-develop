export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// let sumUnknown = numberUnknown + 10; //エラー 数字じゃないかもしれないから計算できないかもしれない。このまま実行するのは乱暴じゃないですか？という警告
console.log(typeof numberUnknown) // number

// 型ガード
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10; 
}
