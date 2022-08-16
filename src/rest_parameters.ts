export {};

// 総和を返却する関数(mdn reduceで検索してサンプルを参考に作成)
const reducer = (previousValue: number, currentValue: number) => {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
};

// 配列(Array)が持っているメソッド reduceに足し算する関数を渡してやる。
// [1, 2, 3, 4].reduce(reducer);

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
