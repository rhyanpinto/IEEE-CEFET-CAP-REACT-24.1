import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  let handleChangeIsActive = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      {isActive ? <div>Está ativo</div> : <div>Não está ativo</div>}
      <button type='button' onClick={handleChangeIsActive}>{isActive ? "Desativar" : "Ativar"}</button>
      <button onClick={() => navigate('/about')}>About</button>
    </>
  )
}