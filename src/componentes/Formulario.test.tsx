import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";


describe("O comportamento do Formulario.tsx", () => {
  test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
  
    // Encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    // Encontrar no DOM o botão
    const botao = screen.getByRole("button");
  
    // Verificar se o input está no DOM
    expect(input).toBeInTheDocument();
    // Verificar se o botão está desabilitado
    expect(botao).toBeDisabled();
  });
  
  test("Adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
  
    // Encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    // Encontrar no DOM o botão
    const botao = screen.getByRole("button");
  
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    fireEvent.click(botao);
  
    expect(input).toHaveFocus();
    expect(botao).toHaveValue("");
  });
  
  test("Nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
  
  
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
  
    const botao = screen.getByRole("button");
  
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    fireEvent.click(botao);
  
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    fireEvent.click(botao);
  
    const mensagemDeErro = screen.getByRole("alert");
  
    expect(mensagemDeErro.textContent).toBe("Nomes duplicados não são permitidos");
  });
  
  test("A mensagem de erro some após os timers", () => {
    jest.useFakeTimers();
  
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
  
  
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
  
    const botao = screen.getByRole("button");
  
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    fireEvent.click(botao);
  
    fireEvent.change(input, { target: { value: "Ana Catarina" } });
    fireEvent.click(botao);
  
    let mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeInTheDocument();
  
    act(() => {
      jest.runAllTimers();
    })
  
    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });  
})