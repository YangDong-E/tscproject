// import React from "react";
// import { Data } from "../../data/getDataPromis";

// const random = (max: number) => Math.floor(Math.random() * max);

// export const Search: React.FC<{ user: Data; click: () => void }> = ({
//   user,
//   click,
// }) => {
//   const { name, email, sentence, profession, birthday } = user;
//   const b = new Date(birthday);
//   const src = `https://source.unsplash.com/random/1000x${random(300) + 500}`;

//   return (
//     <div className="card">
//       <img src={src} className="card-img-top" alt="" />
//       <div className="card-body">
//         <h5 className="card-title">
//           {name} ({email})
//         </h5>
//         <h6 className="card-subtitle mb-2 text-muted">
//           {profession} birthday: {b.getFullYear()}
//         </h6>
//         <p className="card-text">{sentence}</p>
//         <button className="btn btn-primary" onClick={click}>
//           more data...
//         </button>
//       </div>
//     </div>
//   );
// };
import React from "react";

const Search = () => {
  return <div>Search</div>;
};

export default Search;