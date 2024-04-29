import { useEffect, useState } from 'react';
import Button from './components/Button';

// hooks são a forma de trabalhar com estado e ciclo de vida, sem trabalhar com
// classes, somente com funções.

// Effect hook -> permite executar efeitos colaterais em componentes funcionais.
// São similares ao componentDidMount, componentDidUpdate, componentDidUnmount.

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    alert("Iniciou!");
  }, []);

  useEffect(() => {
    alert(`Clicou ${count} vezes`);
  }, [count]);

  function addCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <Button text="Clique aqui" fx={() => addCount()}/>
    </>
  )
}

export default App;