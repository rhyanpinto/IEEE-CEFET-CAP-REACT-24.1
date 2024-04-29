import { useState } from 'react';
import Button from './components/Button';

// Ciclo de vida
// Mounting: Sempre que renderizarmos um componente, o estado do componente tem que ser instanciado
// unmounting: Quando o componente sair de tela, o estado do componente tem que ser limpado

// Para trabalhar com ciclo de vida, precisamos usar classe ou hooks (nas funções).

// normalmente, as alterações nos valores de variáveis modificados realizados em uma função
// "desaparecem" quando sai da função que a modificou.

// Estados são uma maneira de "preservar" valores entre as chamadas de funções.
// useState é a forma de escrever estados sem usar classe.

function App() {
  let count = 0;
  // let [count, setCount] = useState(0);

  function addCount() {
    count += 1;
    alert(count);
    // setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <Button text="Clique aqui" fx={() => addCount()}/>
    </>
  )
}

export default App