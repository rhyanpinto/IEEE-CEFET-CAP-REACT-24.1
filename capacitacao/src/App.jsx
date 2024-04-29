import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);

  let handleChangeIsActive = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      {isActive ? <div>Está ativo</div> : <div>Não está ativo</div>}
      <button type='button' onClick={handleChangeIsActive}>{isActive ? "Desativar" : "Ativar"}</button>
    </>
  )
}

export default App