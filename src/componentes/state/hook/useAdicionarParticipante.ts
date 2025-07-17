import { useSetRecoilState } from "recoil";
import { listaParticipantesState } from "../atom";

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    return (nomeDoParticipante: string) => {
        return setLista(listaAntiga => [...listaAntiga, nomeDoParticipante])
    }
}    
