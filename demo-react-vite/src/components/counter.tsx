import { useState } from "react";

type CounterProps = {
  count: number;
  handleClick: () => void;
};

export function Counter({ count, handleClick }: CounterProps) {
  return <button onClick={handleClick}>Click me: {count}</button>;
}
