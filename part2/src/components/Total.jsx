export const Total = ({ course }) => {
  const parts = course.parts;

  const totalExercises = parts.reduce((sum, order) => sum + order.exercises, 0);
  return (
    <>
      <h4>Total of {totalExercises} exercises</h4>
    </>
  );
};
