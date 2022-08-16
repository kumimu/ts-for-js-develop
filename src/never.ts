export {};

// 呼び元に返って行かない never
function error(message: string): never {
  throw new Error(message);
}

// voidはリターン値がないが、呼び元には戻る
try{
  let result = error('test');
  console.log(result)
} catch (error) {
  console.log(error)
}

let foo : void = undefined
// never型に唯一駄隠喩できるものはerror
// let bar : never = undefined // エラー
let bar : never = error('only error!');