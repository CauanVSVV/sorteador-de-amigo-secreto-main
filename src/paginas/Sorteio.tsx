import React from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form>
        <select name="participanteDavez" id="participanteDavez">
          {participantes.map((participantes) => (
            <option key={participantes}>{participantes}</option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Sorteio;
