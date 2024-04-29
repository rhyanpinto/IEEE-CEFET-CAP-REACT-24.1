import { useEffect, useState } from 'react';

function App() {
  //Criamos um useState como vimos anteriormente
  const [inputText, setInputText] = useState("");
  
  //Criamos uma função que sempre que receber um evento ela muda o valor de setInputText fazendo com que o valor seja salvo
  function handleChange(event) {
    setInputText(event.target.value);
  }
  
  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  return (
    <>
      <p>{inputText}</p>
      {/* Temos um input que recebe o que está em inputText e que executa a função onChange. Essa função é executada sempre que percebe qualquer tipo de mudança
      E como ela recebe a função handleChange, sempre que ela perceber alguma mudança handleChange é executada e salva essa mudança no setInputText */}
      <input type="text" value={inputText} onChange={handleChange} />  
      <input type="text" onChange={handleChange} />  
      <button type='button' onClick={() => alert(inputText)}>Clique aqui</button>
    </>
  )
}

export default App