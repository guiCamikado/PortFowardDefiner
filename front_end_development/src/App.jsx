import "./App.css";

// Pages
import HomePage from "./components/pages/home";

function App() {

  // WIP Coloquei aqui porque sei que amanhã eventualmente eu vou mexer... Seguinte faz uma interface com tailwind e usa aquele negócio do black & white você precisa de uma entrada de portas, uma que armazena as portas abertas, um botão para deletar portas abertas, outro para editar que vai ser um delete seguido de um create que pega os parâmetros um local que recebe o seu IP. lembrando que não da para abrir portas de outros IPs então não deve ser possível de editar o mesmo.

  // Por hora melhor não pensar nisso por hora mas vai ser necessário um banco de dados sqlite aqui
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
