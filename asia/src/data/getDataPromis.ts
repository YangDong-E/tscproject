export interface IUser {
  _id: string;
  name: string;
  company: string;
  price: number;
  // email: string;
  // sentence: string;
  // profession: string;
  // birthday: Date;
}

type GetDataPromiseCallback = (a: IUser[]) => void;
export const getDataPromise =
  (fn: GetDataPromiseCallback) => (skip: number, limit: number) =>
    fetch(`http://localhost:4000/products/${skip}/${limit}`)
      .then((res) => res.json())
      .then(fn);
