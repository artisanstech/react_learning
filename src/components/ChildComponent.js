import React from "react";

function ChildComponent(props) {
  const { greetHandler } = props;
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
