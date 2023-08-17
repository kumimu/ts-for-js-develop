export {};

let name: any = 'brew';

// let length = name.length as number;
let length = (name as string).length as number;
// この書き方のアサーションも可能だが、jsxの記法と似ているため非推奨
// let length = (<string>name).length as number;

console.log(length);
