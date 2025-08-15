import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";
import { useSorteador } from "../state/hook/useSorteador";

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  const navigarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navigarPara("/sorteio");
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar Brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Rodape;
