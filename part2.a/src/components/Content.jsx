export const Content = ({ course }) => {
  const parts = course.parts;
  return (
    <>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
    </>
  );
};
