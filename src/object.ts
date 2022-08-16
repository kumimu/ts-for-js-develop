export {};

// objectは制約が甘い
let profile1: object  = { name: 'kumi' };
profile1 = {birthYear: 1973};

// これも objectと同じで上書きが可能だが、型推論を確認すると、中身の要素を推論している
let profile2 = { name : 'kumi'}
// profile2 = {birthYear: 1973};

// 上記で推論された型をアノテーションとしたのが以下
let profile3: {
  name: string;
} = { name : 'kumi'} 
// このアノテーションの場合は、代入時にエラーとなる
// profile3 = {birthYear: 1973} // エラー
profile3 = {name: 'brew'} // 要素があっていれば上書きは可能
