import Button from "./button";
import { addOne } from "./add_one";
import Counter from "./counter";
import { Sum } from "../types/index";

const sum: Sum = (a, b) => {
  return a + b;
};

export { sum, Button, addOne, Counter };
