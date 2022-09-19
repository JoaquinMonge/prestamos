import React, { Fragment } from "react";

// function Header({ titulo }) {
//   return (
//     <Fragment>
//       <h1>{titulo}</h1>
//     </Fragment>
//   );
// }

//function expression
const Header = ({ titulo }) => (
  <Fragment>
    <h1>{titulo}</h1>
  </Fragment>
);
export default Header;
