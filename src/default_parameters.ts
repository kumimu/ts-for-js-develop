export {};

// デフォルト引数は引数の定義に＝で値を入れる
const nextYearSalary: (currentSalary: number, rate?: number) => number = (
  currentSalary: number,
  rate: number = 1.1
) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.06));
