function Combinators() {
  return (
    <div>
      <h2>Combinadores</h2>

      <h3>Combinadores descendentes</h3>
      <ul>
        <li>Exemplo : body article p</li>
      </ul>

      <h3>Child combinators </h3>
      <ul>
        <li>Exemplo : article {">"} p </li>
      </ul>

      <h3>next-sibling combinators </h3>
      <ul>
        <li>Exemplo : article {"+"} p </li>
      </ul>

      <h3>next-sibling combinators </h3>
      <ul>
        <li>Exemplo : article {"~"} p </li>
      </ul>
    </div>
  );
}
export default Combinators;
