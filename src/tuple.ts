export {};

// 共用型だと制約が弱く、順番を入れ替えてもエラーにはならない
// let profile = ['kumi', 47];
// profile = [47, 'kumi']; // OK

// タプル型では順序違反でエラーがでる
// タプル型は型推論で表示されないので、覚えてかける様にしておく
let profile:[string, number] = ['kumi', 47];
// profile = [47, 'kumi'];  // エラー