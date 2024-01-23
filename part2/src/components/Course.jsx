import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

export const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};
