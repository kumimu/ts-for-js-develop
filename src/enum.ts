export {};

enum Months {
  January = 1, // 初期値を1とすることで、0から開始するデフォルト設定を変更できる
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

// 矩形選択、複数同時編集(Shift + option)
console.log (Months.January);
console.log (Months.February);
console.log (Months.March);


enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({green})
// let yellow = COLORS.YELLOW; // エラー

// 使う直前で付け足すことも可能
enum COLORS {
  YELLOW = '#FFFF00'
}

let yellow = COLORS.YELLOW; // OK
console.log({yellow})

