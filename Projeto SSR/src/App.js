import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  const adicionar = () => {
    setCount(count + 1);
  };

  const subtrair = () => {
    if (count > 0)
      setCount(count - 1);
  };
  // A aplicação que vai ser renderizada é um contador
  return (
    <div className='App'>
      <h1>Contador</h1>
      <h3>{count}</h3>
      <button onClick={adicionar}>Adicionar</button>
      <button onClick={subtrair}>Subtrair</button>
    </div>
  );
}

export default App;
