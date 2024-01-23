export const Total = ({ course }) => {
  const parts = course.parts;

  const totalExercises = parts.reduce((sum, order) => sum + order.exercises, 0);
  return (
    <>
      <p>Total of {totalExercises} exercises</p>
    </>
  );
};
