export {};

class Mahotsukai {}
class Souryo {}

// TypeScriptは単一継承
// class Taro extends Mahotsukai, Souryo {} // エラー
// 複数継承はできないが複数インタフェースの寄せ集めは可能
class Taro extends Mahotsukai {}

interface Kenja {
  // シグネチャ
  ionazun(): void;
}

interface Senshi {
  // シグネチャ
  kougeki(): void;
}

// class Jiro implements Kenja, Senshi, Mahotsukai,Souryo { } // エラーにならないのはなんで

class Jiro implements Kenja, Senshi {
  // 実装
  ionazun(): void {
    console.log('ionazun');
  }
  // 実装
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
