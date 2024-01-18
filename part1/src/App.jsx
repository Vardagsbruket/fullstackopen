const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age}
      </p>
    </div>
  );
};

const App = () => {
  const name = "Pamela";
  const age = 35;
  return (
    <div>
      <h1>Greetings!</h1>

      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
