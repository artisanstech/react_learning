import React from "react";

const Greet = (props) => {
  console.log(props.name);
  return (
    <div>
      <h1>
        Hello {props.name} {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
