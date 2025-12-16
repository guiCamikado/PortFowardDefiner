import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // WIP Coloquei aqui porque sei que amanhã eventualmente eu vou mexer... Seguinte faz uma interface com tailwind e usa aquele negócio do black & white você precisa de uma entrada de portas, uma que armazena as portas abertas, um botão para deletar portas abertas, outro para editar que vai ser um delete seguido de um create que pega os parâmetros um local que recebe o seu IP. lembrando que não da para abrir portas de outros IPs então não deve ser possível de editar o mesmo.

  // Por hora melhor não pensar nisso por hora mas vai ser necessário um banco de dados sqlite aqui
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
