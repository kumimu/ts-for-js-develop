export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public midleName: string,
      public lastName: string
    ) {}
  }
}

// const me = new Japanese.Person('brew');
// console.log(me.name);

const me = new Japanese.Tokyo.Person('brewさん');
console.log(me.name);

const meOsaaka = new Japanese.Osaka.Person('brewやん');
console.log(meOsaaka.name);

const micahel = new English.Person('Michael', 'Joseph', 'Jacson');
console.log(micahel);
