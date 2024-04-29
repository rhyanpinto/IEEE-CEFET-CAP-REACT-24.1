// Essa é a forma mais simples de se fazer um componente
function Button1() {
	return (
		<button type="button"> Botão </button>
	)
}

// Propriedades (props)
function Button2(props) {
  // As propriedades dos componentes definem valores, funções e elementos
	// que passaremos quando chamamos um componentes
  return (
    <button type="button">{props.text}</button>
  )
}

// Propriedades desestruturadas
// mostram todos os elementos que podemos passar quando o elemento for chamado
function Button3({ text, children }) {
  return (
    <button type="button">
      {text}
      {children}
    </button>
  )
}