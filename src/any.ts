import axios from 'axios';
export {};

// jsonを返却するAPIのURL
let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'


axios.get(url).then(function (response) {
    // APIから返却される型を推論することはできないため、
    // 型推論はany型
    // let data = response.data;

    // 曖昧な方を指定するのはtypescriptでは望ましくない
    // let data: any = response.data;

    // 自分で確認してアノテーションを書く
    // object型の配列。空でも成立してしまう。
    // let data: object[] = response.data;
    
    // 中身の要素を反映したインタフェースを作成して配列とする
    interface Article {
      id: number;
      title: string;
      description: string;
    }

    // let data: Article[]
    // data = response.data;
    // 一部が足りない状態で上書き
    // Article1eの要素が明確なのでtitleが足りていないことを警告してくれる様になる
    // data = [
    //   {id:1,description:'foo'}
    // ];

    // // anyの場合は警告が出ない
    // let data: any
    // data = response.data;

    // // 要素が不明なのでtitleが足りていないことを警告しない
    // data = [
    //   {id:1,description:'foo'}
    // ];

    let data: Article[]
    data = response.data;

    console.log(data);
  })