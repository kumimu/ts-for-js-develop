export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = 'brew';
  static lastName: string = 'N';

  static work() {
    // return `Hey guys! This is ${Me.firstName} Are you interested in TypeScript?`; // OK
    return `Hey guys! This is ${this.firstName} Are you interested in TypeScript?`; // クラス名を抽象的にした方がより良い
  }
}

// let me = new Me();
// console.log(me.isProgramer);

console.log(Me.isProgramer);
console.log(Me.work());
