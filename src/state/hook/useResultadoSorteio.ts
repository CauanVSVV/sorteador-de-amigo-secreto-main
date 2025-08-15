import { resultadoAmigoSecretoState } from "../atom";
import { useRecoilValue } from "recoil";

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoAmigoSecretoState)
};