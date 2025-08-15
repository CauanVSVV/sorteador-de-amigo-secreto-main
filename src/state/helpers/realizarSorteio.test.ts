import { realizarSorteio } from "./realizarSorteio";

describe("Dado um sorteio de amigo srecto", () => {
  test("cada participante não sortia o próproio nome", () => {
    const participantes = [
      "Ana",
      "Catarina",
      "juliana",
      "João",
      "Vinicius",
      "nathália",
    ];
    const sorteio = realizarSorteio(participantes);

    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
