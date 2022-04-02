import React from "react";

interface CounterProps {
  color: string;
}
const Counter = (props: CounterProps) => {
  return (
    <div style={{ color: props.color ? props.color : "green" }}>Counter</div>
  );
};

export default Counter;
