function PseudoClasses() {
  return (
    <div>
      <h2>Pseudo classes</h2>
      <p>
        Você pode usar essas pseudo classes quando houver repetição e a
        necessidade de aplicar código em um mesmo trecho do html. Por exemplo: O
        primeiro parágrafo de todos os artigos de uma página serão em negrito.
      </p>

      <h3>Exemplo de pseudo classes e elementos</h3>
      <ul>
        <li>:last-child</li>
        <li>:only-child</li>
        <li>:invalid</li>
        <li>::hover (user-action pseudo-classes)</li>
        <li>:focus (user-action pseudo-classes)</li>
        <li>
          ::first-line (pseudo-elemento : irá aplicar a regra de css somente na
          primeira linha do texto)
        </li>
      </ul>
      <p>
        OBS:Antes do : , no exemploh acima, devemos informar qual item no qual
        se aplicará a regra. Por exemplo : article. Nesse caso ficará : article
        p:first-child.
      </p>
      <h2>Combinando pseudo-classes e pseudo-elements</h2>
      <p>
        Se você quisesse tornar a primeira linha do primeiro parágrafo em
        negrito, você poderia encadear os seletores :first-child e ::first-line.
        Tente editar o exemplo ao vivo anterior para que ele use o seguinte CSS.
        Estamos dizendo que queremos selecionar a primeira linha do primeiro
        elemento p, que está dentro de um elemento article.
      </p>
      <h2>Special Pseudo elements</h2>
      <p>
        Você poderia usar esses para inserir uma sequência de texto, como no
        exemplo abaixo. dá para alterar o valor do texto da propriedade de
        content e veja a mudança na saída. Você também poderia alterar o
        pseudo-elemento ::before para ::after e ver o texto inserido no final do
        elemento em vez do início. Exemplo:CSS -- .box::before content: "banana
        ";
      </p>
    </div>
  );
}
export default PseudoClasses;
