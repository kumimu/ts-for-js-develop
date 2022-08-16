export {};

// オプショナルな引数 ?を付与する
// bmi(身長、体重、 コンソールに出力するか？)
// bmi(1.65, 55, true);
// bmi(1.65, 55, false);
// bmi(1.65, 55);

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.65, 55, true); // 出力あり
bmi(1.65, 55, false); // 出力なし
bmi(1.65, 55); // 出力なし
