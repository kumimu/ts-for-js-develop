export {};

type Pitcher1 = {
  throwingSpeed: number
}

type Batter1 = {
  battingAverage: number
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
}

// ベタっと再定義するのはダサい
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

// 既存の型を利用して定義
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniPlayer: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}

