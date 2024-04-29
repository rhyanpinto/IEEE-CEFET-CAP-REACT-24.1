export default function Button({text, fx, children}) {
  return (
    <button type="button" onClick={fx}>
      {text}
      {children}
    </button>
  )
}