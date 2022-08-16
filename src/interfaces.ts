export {};

// type aliasは = が必要。別名をつける。
type ObjectType = {
  name :string, 
  age: number
}

let object : ObjectType = {
  name: 'kumi',
  age: 12
}


// インタフェースでもobject型に名前をつけることができる。
interface Objectinterface{
  name :string, 
  age: number
}

let object2 : Objectinterface = {
  name: 'brew',
  age: 3
}
