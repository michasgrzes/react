import React from "react";

function Location(props) {
  return (
    <div>
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>type {props.type}</p>
      <p>dimention {props.dimention}</p>
    </div>
  );
}

export default Location;
