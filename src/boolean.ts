export {};

// モジュールシステムを導入しない場合、nameはグローバル空間に宣言してしまう。
// export {}で空のモジュールを作成している。これでグローバル空間ではなく、モジュールに割り当てられる。
let name = 'typescript';


let isFInished : boolean = true;
isFInished = false;
// isFInished = 1;
console.log({ isFInished });
