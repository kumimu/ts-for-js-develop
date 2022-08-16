export {};

// アロー関数 存在意義、リターンが省略可能？
let bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};

console.log(bmi(1.78, 86));
