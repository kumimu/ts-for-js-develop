export {};

// 無名関数
// =の前までがアノテーション
let bmi: (height: number, weight: number) => number = function (height: number, weight: number): number {
  return weight/ (height * height)
}

console.log(bmi(1.78, 86))