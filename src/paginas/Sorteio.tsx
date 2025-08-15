import { useState } from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";

const Sorteio = () => {
  const [participanteDavez, setParticipanteDavez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");
  const participantes = useListaDeParticipantes();
  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    
    if (resultado.has(participanteDavez)) {
      setAmigoSecreto(resultado.get(participanteDavez)!);
    }
  };


  return (
    <section>
      <form onSubmit={sortear}>
        <select 
          required 
          name="participanteDavez" 
          id="participanteDavez"
          placeholder="Selecione o seu nome"
          value={participanteDavez}
          onChange={evento => setParticipanteDavez(evento.target.value)}
        >
          {participantes.map((participantes) => (
            <option key={participantes}>{participantes}</option>
          ))}
        </select>
        <button type="submit">Sortear</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  );
};

export default Sorteio;
