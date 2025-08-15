import { realizarSorteio } from "./realizarSorteio";

describe("Dado um sorteio de amigo secreto", () => {
  test("cada participante não sorteia o próproio nome", () => {
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
