export {};

let name = 'brew';
name = 'BREW';

let nickname = 'Boo' as const;
// nickname = 'Boo-kun'; // コンパイルエラー
nickname = 'Boo'; // 同じ値での再代入のみOK

let profile = {
  name: 'Brew',
  height: 40,
} as const;
// as constで宣言すると、プロパティは全てreadonlyになる(要素がネストしていても全てに適用される)
// readonlyなため、再代入不可
// profile.name = 'BrewBoy';
// profile.height = 50;
