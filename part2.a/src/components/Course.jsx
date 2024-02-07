import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

export const Course = ({ course }) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {course.map((course) => (
        <section key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </section>
      ))}
    </>
  );
};
