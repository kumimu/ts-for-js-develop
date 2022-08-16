export {};

let numbers : number[]= [1,2,3];

// この様にも書けるが、非推奨。
// こちらはインタフェース、ジェネリクスで型を指定
let numbers2: Array<number> = [1,2,3];

let strings: string[] = ['TypeScript','JavaScript','CofeeScript'];
let nijigenhairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

console.log(nijigenhairetsu)

// union 共用型
let hairetsu: (string | number | boolean)[] = [1,false,'Japan'];
console.log(hairetsu)
