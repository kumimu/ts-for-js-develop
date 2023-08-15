export {};

class VisaCard {
  // // private owner: string;
  // readonly owner: string;

  // constructor(owner: string) {
  //   this.owner = owner;
  // }

  // 初期化を簡単に行うバージョン
  
  // readonlyを伴う場合、publicの省略は可。
  // しかし後々readonlyを消した時にpublicを復活する手間があるので書いておいた方が良い。s
  // constructor(readonly owner: string) {} 
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('kumi');

console.log(myVisaCard);
// myVisaCard.owner = 'bar'; //エラー。readonlyプロパティ
