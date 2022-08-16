export {};

// nullを設定しても型推論はanyとなる
// let absence = null;

// nullを明示的にアノテーションするとnull以外いれられない
let absence: null = null;
// absence = true;

// undefinedを設定しても型推論はanyとなる
// let data = undefined

// undefinedを明示的にアノテーションすると// nullを明示的にアノテーションするとnull以外いれられない
// 以外いれられない
let data: undefined = undefined
// data = 1