export {};

// 文字列のリテラル
let dayOfTheWeek:'日'|'月'|'火'|'水'|'木'|'金'|'土' = '日'
dayOfTheWeek = '月'
// dayOfTheWeek = '山'  エラー

// 数値のリテラル
let month:1|2|3|4|5|6|7|8|9|10|11|12 = 1
month = 12
// month = 13 //エラー

// 真偽のリテラル
// そもそも二種類しかないので実際は使わないシーンはないと思うが、
// s例えばtrueしか入らない書き方もできる＝とはいえこの例はリテラルってことでもなさそうだなぁ。
let TRUE : true = true
// TRUE = false // エラー