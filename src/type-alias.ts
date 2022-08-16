export {};

// 先頭は大文字
type Mojiretsu = string;

const fooString : string = 'Hello';
const fooMojiretsu : Mojiretsu = 'Hello';

const example1 = 
{
  name: 'aaa',
  age: 123
}

type Profile = {
  name: 'aaa',
  age: 123
}

const example2: Profile = 
{
  name: 'aaa',
  age: 123
}

// 他の型を参照して型に別名をつけることができる。
// example1の元の型が変更になっても追従可能で便利
type Profile2 = typeof example1;