export interface Data {
  _id: string;
  name: string;
  email: string;
  sentence: string;
  profession: string;
  birthday: Date;
}

type GetDataPromiseCallback = (a: Data[]) => void;
export const getDataPromise =
  (fn: GetDataPromiseCallback) => (skip: number, limit: number) =>
    fetch(`http://localhost:4000/products`)
      .then((res) => res.json())
      .then(fn);
