/*Recap
Link Full informação : https://pt-br.react.dev/learn/reacting-to-input-with-state#step-1-identify-your-components-different-visual-states
  Programação declarativa significa descrever a UI para cada estado visual em vez de microgerenciá-la (imperativa).
Ao desenvolver um componente:
 - Identifique todos os seus estados visuais.
 - Determine os acionadores humanos e computacionais para as mudanças de estado.
 - Modele o state com useState.
 - Remova o state não essencial para evitar bugs e paradoxos.
 - Conecte os manipuladores de eventos para definir o state.*/

import { useState } from "react";

export default function ReactToStates() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = "background";
  let pictureClassName = "picture";
  if (isActive) {
    pictureClassName += " picture--active";
  } else {
    backgroundClassName += " background--active";
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Casas de arco-íris em Kampung Pelangi, Indonésia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
